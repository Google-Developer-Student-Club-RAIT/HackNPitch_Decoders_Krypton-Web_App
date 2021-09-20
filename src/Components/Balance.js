import React, {useContext} from 'react'
import { Globalcontext } from '../Hooks/GlobalState';

export const Balance = () => {
    const {transactions}= useContext(Globalcontext);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const titlestyle = {
        fontSize: "2rem",
    }
    return (
        <>
            <h4 style={titlestyle}>Your Balance</h4>
            <h1 id="balance">${total}</h1>
            <button>Update Balance</button>

        </>
    )
}
