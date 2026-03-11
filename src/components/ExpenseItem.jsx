import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { useExpenseContext} from '../Context.jsx';
import  ACTIONS  from '../actions.js';

const ExpenseItem = ({ expense }) => {
    const { dispatch } = useExpenseContext();

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {expense.name}
            <div>
                <span className='badge text-bg-light'>
                    ${expense.cost}
                </span>
                <TiDelete onClick={() => dispatch({ type: ACTIONS.DELETE, payload: expense.id })} size='1.5em'></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;