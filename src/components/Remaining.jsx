import React from 'react';
import { useExpenseContext } from '../Context';

const Remaining = () => {
    const { expenses, countExpenses, budget } = useExpenseContext();
    const [remaining, setRemaining] = React.useState(budget)

    React.useEffect(() => {
        const totalExpenses = countExpenses();
        console.log(totalExpenses)
        const remaining = budget - totalExpenses;
        setRemaining(remaining);
    }, [expenses]); //i can rerender total here using useEffect which listens to expenses list change

//OR I can save total state in context and calculate it there and update it calling fn from context inisde ExpenseForm 
// when I add or delete expensese and then just use total in Remaining component without useEffect.

    return (
        <div className='alert alert-success'>
            <span>Remaining: £{remaining.toFixed(2)}</span>
        </div>
    );
};

export default Remaining;