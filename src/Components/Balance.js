import React, {useContext} from 'react'
import { Globalcontext } from '../Hooks/GlobalState';

export const Balance = () => {
    const {transactions}= useContext(Globalcontext);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
    return (
        <>
            <h4 className="my-4 mx-4 text-4xl">Your Balance</h4>
            <h1 id="balance" className="text-2xl my-24 mx-32" >₹{total}</h1>
            <button className="text-lg float-right mr-4 hover:text-yellow-300">Update Balance</button>

        </>
    )
}
