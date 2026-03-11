import React from 'react';
import { useExpenseContext } from '../Context';

const Budget = () => {
    const { budget, setBudget } = useExpenseContext();
    const [isEditing, setIsEditing] = React.useState(false)

    const handleSave = () => {
        setIsEditing(false)
    }
    return (
        <div className='alert alert-secondary'>
            {isEditing ? (
                <>
                    <input
                        type='number'
                        value={budget}
                        onChange={(e) => setBudget(parseFloat(e.target.value) || 0)}
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