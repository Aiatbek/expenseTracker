import { useState } from "react";
import React, { createContext, useContext } from "react";

const ExpenseContext = createContext();

export const useExpenseContext = () => useContext(ExpenseContext)

export function ExpenseProvider({children}){

    const [expenses, setExpenses] = useState([])
    const [budget, setBudget] = useState(2000)
    const [total, setTotal] = useState(0)

    const addExpense = (expense) =>{
        setExpenses(prev => [...prev, expense])
    }

    const deleteExpense = (id) =>{
        setExpenses(prev => prev.filter((expns)=> expns.id != id))
    }

    const countExpenses = () => {
        let total = 0;
        expenses.forEach((expense) => {
            total += expense.cost
        });
        setTotal(total)
        return total
    }

    const value = {
        addExpense,
        deleteExpense,
        expenses, 
        budget,
        setBudget, 
        countExpenses,
        total, 
        setTotal
    }

    return <ExpenseContext.Provider value={value}>
        {children}
    </ExpenseContext.Provider>

}