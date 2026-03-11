import React, { useEffect} from 'react';
import { useExpenseContext } from '../Context';

const ExpenseTotal = () => {
    const {countExpenses, expenses, total} = useExpenseContext()


    useEffect(()=>{
        countExpenses()
    }, [expenses])
 //i can rerender total here using useEffect which listens to expenses list change

//OR I can save total state in context and calculate it there and update it calling fn from context inisde ExpenseForm 
// when I add or delete expense and then just use total in Remaining component without useEffect.


    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{total.toFixed(2)}</span>
        </div>
    );
};

export default ExpenseTotal;