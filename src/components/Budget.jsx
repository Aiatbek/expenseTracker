import React from 'react';
import { useExpenseContext } from '../Context';
import  ACTIONS  from '../actions.js';

const Budget = () => {
    const { budget, dispatch } = useExpenseContext();
    const [isEditing, setIsEditing] = React.useState(false);
    const [budgetValue, setBudgetValue] = React.useState(budget);

    const handleSave = () => {
        dispatch({ type: ACTIONS.UPDATE_BUDGET, payload: Number(budgetValue) || 0 });
        setIsEditing(false);
    }

    // React.useEffect(() => {
    //     setBudgetValue(budget);
    // }, [budget]);  // to update input value when budget changes from other components to sync budget value in input in edit with budget in context. 

    return (
        <div className='alert alert-secondary'>
            {isEditing ? (
                <>
                    <input
                        type='number'
                        value={budgetValue}
                        onChange={(e) => setBudgetValue(e.target.value)}
                    />
                    <button className='btn btn-secondary btn-sm float-end' onClick={handleSave}>
                            Save
                    </button>
                </>
            ) : (
                <>
                    <span>Budget: £{budget.toFixed(2)}</span>
                    <button className='btn btn-secondary btn-sm float-end' onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
        
        </div>
    );
};

export default Budget;