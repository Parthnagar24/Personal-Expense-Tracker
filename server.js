const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_FILE = "data.json";

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Helper functions for data handling
const loadData = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
};

const generateId = (expenses) => {
  if (expenses.length === 0) {
    return 1;
  }
  const maxId = expenses.reduce((max, expense) => Math.max(max, expense.id), 0);
  return maxId + 1;
};

// API Endpoints
app.get("/api/expenses", (req, res) => {
  const expenses = loadData();
  res.json(expenses);
});

app.post("/api/expenses", (req, res) => {
  const { amount, date, note, category } = req.body;

  if (!amount || !date || !note) {
    return res
      .status(400)
      .json({ error: "Amount, date, and note are required." });
  }

  const expenses = loadData();
  const newExpense = {
    id: generateId(expenses),
    amount: parseFloat(amount),
    date,
    note,
    category: category || "Uncategorized",
  };

  expenses.push(newExpense);
  saveData(expenses);
  res.status(201).json(newExpense);
});

app.put("/api/expenses/:id", (req, res) => {
  const expenses = loadData();
  const expenseId = parseInt(req.params.id);
  const expenseToUpdate = expenses.find((exp) => exp.id === expenseId);

  if (!expenseToUpdate) {
    return res.status(404).json({ error: "Expense not found." });
  }

  const { amount, date, note, category } = req.body;

  if (amount) expenseToUpdate.amount = parseFloat(amount);
  if (date) expenseToUpdate.date = date;
  if (note) expenseToUpdate.note = note;
  if (category) expenseToUpdate.category = category;

  saveData(expenses);
  res.json(expenseToUpdate);
});

app.delete("/api/expenses/:id", (req, res) => {
  let expenses = loadData();
  const expenseId = parseInt(req.params.id);
  const initialLength = expenses.length;
  expenses = expenses.filter((exp) => exp.id !== expenseId);

  if (expenses.length === initialLength) {
    return res.status(404).json({ error: "Expense not found." });
  }

  saveData(expenses);
  res.status(200).json({ message: "Expense deleted successfully." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
