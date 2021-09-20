import React, {createContext, useContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    transactions: []
}

//Create Context
export const Globalcontext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
// Actions

function deleteTransaction(id){
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  });
}

function addTransaction(transaction){
  dispatch({
    type: 'ADD_TRANSACTION',
    payload: transaction
  });
}

  return(
    <Globalcontext.Provider value={{
      transactions: state.transactions,
      deleteTransaction, 
      addTransaction
    }}>
      {children}
    </Globalcontext.Provider>
  );
}