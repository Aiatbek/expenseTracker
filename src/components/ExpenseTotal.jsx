import React from 'react';
import { useExpenseContext } from '../Context';

const ExpenseTotal = () => {
    const {countExpenses} = useExpenseContext()


    const total = countExpenses()// Actually I don't need useEffect because react will rerender component in these scenarios:
    //if props changed, if context changed, or parent component rerendered.


    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{total.toFixed(2)}</span>
        </div>
    );
};

export default ExpenseTotal;