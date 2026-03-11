import { useReducer } from "react";
import React, { createContext, useContext } from "react";
import ACTIONS  from "./actions.js";



function AppReducer(state, action){
    switch(action.type){
        case ACTIONS.ADD:
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case ACTIONS.DELETE:
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }
        case ACTIONS.UPDATE_BUDGET:
            return {
                ...state,
                budget: action.payload
            }
        case ACTIONS.SEARCH:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state
    }
}

const initialState = {
    budget: 2000,
    searchTerm: '',
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
        { id: 14, name: 'car service', cost: 50 },
    ],
};

const ExpenseContext = createContext();

export const useExpenseContext = () => useContext(ExpenseContext)

export function ExpenseProvider({children}){

    const [state, dispatch] = useReducer(AppReducer, initialState)

    let value = {
        budget: state.budget,
        expenses: state.expenses,
        searchTerm: state.searchTerm,
        dispatch
    }

    return <ExpenseContext.Provider value={value}>
        {children}
    </ExpenseContext.Provider>

}