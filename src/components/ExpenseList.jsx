import React from 'react'
import ExpenseItem from './ExpenseItem';
import { useExpenseContext } from '../Context';

const ExpenseList = () => {
    const { expenses } = useExpenseContext()

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </ul>
    )
}

export default ExpenseList