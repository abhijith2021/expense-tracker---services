const Expense = require('../models/Expense');

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;
    const newExpense = new Expense({ amount, category, description, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create expense' });
  }
};

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
};

// Update an existing expense
exports.updateExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedExpense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    res.status(200).json(updatedExpense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update expense' });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExpense = await Expense.findByIdAndDelete(id);
    if (!deletedExpense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    res.status(200).json(deletedExpense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete expense' });
  }
};
