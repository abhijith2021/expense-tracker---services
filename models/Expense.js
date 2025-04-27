const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
