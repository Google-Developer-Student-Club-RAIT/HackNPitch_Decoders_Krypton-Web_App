import React, {useContext} from 'react'
import { Globalcontext } from '../Hooks/GlobalState';
import {Transaction} from './Transaction';

export const EWallet = () => {

  const {transactions}= useContext(Globalcontext);
    return (
        <div>
            <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/> ))}
      </ul>
        </div>
    )
}
