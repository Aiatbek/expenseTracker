import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { useExpenseContext } from '../Context';

const ExpenseItem = ({ expense }) => {
    const { deleteExpense } = useExpenseContext();

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {expense.name}
            <div>
                <span className='badge text-bg-light'>
                    ${expense.cost}
                </span>
                <TiDelete onClick={() => deleteExpense(expense.id)} size='1.5em'></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;