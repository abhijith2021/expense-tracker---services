const express = require('express');
const router = express.Router();
const { getExpenses, createExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');
router.post('/', createExpense);

router.get('/', getExpenses);


router.put('/:id', updateExpense);


router.delete('/:id', deleteExpense);

module.exports = router;
