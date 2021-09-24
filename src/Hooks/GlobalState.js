import React, { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const savedTransaction = localStorage.getItem('transaction');
// let initialState = {
//     transactions: []
// }
let initialState
// if stored
if (savedTransaction) {
  initialState = {
    transactions: JSON.parse(savedTransaction)
  }
} else {
  initialState = { transactions: [] }
}
console.log("istate", initialState)
//Create Context
export const Globalcontext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions

  function deleteTransaction(id) {

    let list = localStorage.getItem('transaction');
    if (list) {
      let newList = JSON.parse(list).filter((item) => item.id !== id)
      localStorage.setItem("transaction", JSON.stringify(newList));
    }

    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <Globalcontext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </Globalcontext.Provider>
  );
}