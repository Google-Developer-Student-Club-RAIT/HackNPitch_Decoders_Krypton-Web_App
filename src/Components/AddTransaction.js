import React, { useState, useContext } from 'react'
import { Globalcontext } from '../Hooks/GlobalState'


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const [transaction, setTransaction] = useState(() => {
    // get from localstorage
    const savedTransaction = localStorage.getItem('transaction');
    // if stored
    if (savedTransaction) {
      return JSON.parse(savedTransaction);
    } else {
      return [];
    }
  });

  React.useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(transaction));
    console.log("transactions-", transaction);
  }, [transaction]);

  const { addTransaction } = useContext(Globalcontext);
  const submitHandler = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
    setTransaction([
      ...transaction,
      newTransaction
    ])

    //clear state for next transaction 
    setText('')
    setAmount('')
  }

  return (
    <div>
      <h3 className="my-6 mx-4 text-3xl">Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          {/* <label htmlFor="text">Text</label> */}
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          {/* <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          > */}
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button onClick={submitHandler} className="btn">Add transaction</button>
      </form>
    </div>
  )
}