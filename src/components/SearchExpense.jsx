import React from 'react'
import { useExpenseContext} from '../Context.jsx';
import ACTIONS  from '../actions.js';


export default function SearchExpense() {
    const { dispatch } = useExpenseContext();
    const [searchValue, setSearchValue] = React.useState('');

    const handleSearch = (value) => {
        setSearchValue(value);
        dispatch({ type: ACTIONS.SEARCH, payload: value });
    }

  return (
    <div>
        <input type="text" className='form-control' placeholder="Search expenses..." value={searchValue} onChange={(e)=>handleSearch(e.target.value)} />
    </div>
  )
}
