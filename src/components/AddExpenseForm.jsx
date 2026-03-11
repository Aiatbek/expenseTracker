import React from 'react';
import { useExpenseContext } from '../Context';
import  ACTIONS  from '../actions.js';

const AddExpenseForm = () => {
    const [expenseName, setExpenseName] = React.useState('');
    const [expenseCost, setExpenseCost] = React.useState('');
    const { dispatch } = useExpenseContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = { id: Date.now(), name: expenseName, cost: parseFloat(expenseCost) }
        dispatch({
            type: ACTIONS.ADD,
            payload: expense
        });

        setExpenseName('');
        setExpenseCost('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                    ></input>
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        value={expenseCost}
                        onChange={(e) => setExpenseCost(e.target.value)}
                    ></input>
                </div>

            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;