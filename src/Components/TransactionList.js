import React, {useContext} from 'react'
import { Globalcontext } from '../Hooks/GlobalState';
import {Transaction} from './Transaction';

export const TransactionList = () => {

  const {transactions}= useContext(Globalcontext);
 
    return (
        <div>
             <h4 className="my-4 mx-4 text-4xl">Transactions</h4>
             <ul id="list" className="list">
              {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/> ))}
            </ul>
        </div>
    )
}
