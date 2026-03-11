import React from 'react';
import { useExpenseContext } from '../Context';

const Remaining = () => {
    const { countExpenses, budget } = useExpenseContext();

        const remaining = budget - countExpenses()


    return (
        <div className='alert alert-success'>
            <span>Remaining: £{remaining.toFixed(2)}</span>
        </div>
    );
};

export default Remaining;