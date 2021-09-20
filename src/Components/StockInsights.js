import React, {useContext} from 'react'
import { Globalcontext } from '../Hooks/GlobalState';
import {Transaction} from './Transaction';

export const StockInsights = () => {

  const {transactions}= useContext(Globalcontext);
    return (
        <div>
            <h3>Stock </h3>
      <ul id="list" className="list">
        {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/> ))}
      </ul>
        </div>
    )
}
