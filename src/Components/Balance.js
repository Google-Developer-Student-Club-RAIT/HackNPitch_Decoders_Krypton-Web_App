import React, {useContext} from 'react'
import { Globalcontext } from '../Hooks/GlobalState';

export const Balance = () => {
    const {transactions}= useContext(Globalcontext);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
    return (
        <>
            <h4 className=" text-center my-4 mx-4 text-4xl">Your Balance</h4>
            <h1 id="balance" className="text-2xl text-center py-20 font-bold text-green-400" >₹{total}</h1>
        </>
    )
}
