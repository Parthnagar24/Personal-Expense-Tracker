# Personal Expense Tracker

A simple and effective Personal Expense Tracker application built as part of the Evaao internship application process. This project enables users to manage their daily expenses, record transactions, and analyze their spending patterns.

## 🚀 Features

### Must-Have (Basic Functionality)
- **Add Expense:** Add new expenses with amount, date, and a descriptive note.
- **View Expenses:** List all recorded expenses.
- **Update Expense:** Modify existing expense entries.
- **Delete Expense:** Remove expenses from the tracker.
- **Data Persistence:** Expenses are saved to a file (or database) to ensure data is retained.
- **Validation & Error Handling:** Robust input validation and user-friendly error messages.

### Good-to-Have (Optional)
- **Categories:** Assign categories (e.g., food, travel, bills) to expenses.
- **Summary Reports:** View total spent, breakdown by category, and monthly summaries.
- **Filters:** Filter expenses by date range or category.
- **User Interface:** Simple CLI or UI for ease of use.

## 📦 Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Parthnagar24/Personal-Expense-Tracker.git
   cd Personal-Expense-Tracker
   ```

2. **Install Dependencies:**
   > _Instructions may vary depending on implementation (Node.js, Python, etc.).  
   > For JavaScript/Node.js:_
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   # Example for CLI
   node index.js

   # Or for Python
   python main.py
   ```

## ✨ Usage

- **Add an Expense:**
  ```
  > add --amount 50 --date 2025-10-04 --note "Blinkit Order" --category "Food"
  ```

- **View Expenses:**
  ```
  > list
  ```

- **Update an Expense:**
  ```
  > update --id 1 --amount 60
  ```

- **Delete an Expense:**
  ```
  > delete --id 2
  ```

- **Show Summary:**
  ```
  > summary --by category
  ```

## 📝 Assumptions

- Each expense entry must have an amount, date, and note.
- Categories are optional but enhance reporting.
- Data is persisted locally (file/database).
- CLI commands shown as usage examples; actual usage may differ based on implementation.

## 🏗️ Design Overview

- **Modular Structure:** Separate modules/functions for expense management, data storage, and reporting.
- **Data Layer:** Uses a file or simple database for persistence.
- **Validation:** Ensures all user inputs are correctly formatted and meaningful.
- **Extensible:** Designed for easy addition of new features like authentication or export.

## 📚 Sample Input/Output

**Sample data.json:**
```json
[
  {
    "id": 1,
    "amount": 50,
    "date": "2025-10-04",
    "note": "Blinkit Order",
    "category": "Food"
  },
  {
    "id": 2,
    "amount": 5055,
    "date": "2025-10-04",
    "note": "Asus Laptop",
    "category": "IT"
  }
]
```

**Add Expense**
```
Command: add --amount 50 --date 2025-10-04 --note "Blinkit Order" --category "Food"
Output: Expense added successfully! ID: 1
```

**List Expenses**
```
ID | Date       | Amount | Category | Note
1  | 2025-10-04 | 50     | Food     | Blinkit Order
2  | 2025-10-04 | 5055   | IT       | Asus Laptop
```

**Summary by Category**
```
Category | Total Spent
Food     | 50
IT       | 5055
```



Thank you for reviewing my project!
