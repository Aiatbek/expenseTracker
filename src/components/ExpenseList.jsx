import React from 'react'
import ExpenseItem from './ExpenseItem';
import { useExpenseContext } from '../Context';

const ExpenseList = () => {
    const { expenses, searchTerm } = useExpenseContext()
    console.log(searchTerm)
    const filteredExpenses = searchTerm
        ? expenses.filter((expense) => expense.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : expenses

    return (
        <ul className='list-group'>
            {filteredExpenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </ul>
    )
}

export default ExpenseList