import React from 'react';
import { useExpenseContext } from '../Context';

const Remaining = () => {
    const { expenses, budget } = useExpenseContext();

    const totalSum = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const remaining = budget - totalSum


    return (
        <div className='alert alert-success'>
            <span>Remaining: £{remaining.toFixed(2)}</span>
        </div>
    );
};

export default Remaining;