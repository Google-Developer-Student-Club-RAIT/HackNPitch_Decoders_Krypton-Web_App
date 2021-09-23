import React, { useContext } from 'react'
import {Globalcontext} from '../Hooks/GlobalState'
export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(Globalcontext);     

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} 
        <span>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            {sign}₹{Math.abs(transaction.amount)}
        </span>
    </li>
    )
}
