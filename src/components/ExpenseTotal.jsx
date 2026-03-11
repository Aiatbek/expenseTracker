import React from 'react';
import { useExpenseContext } from '../Context';

const ExpenseTotal = () => {
    const {expenses} = useExpenseContext()


    const totalSum = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalSum.toFixed(2)}</span>
        </div>
    );
};

export default ExpenseTotal;