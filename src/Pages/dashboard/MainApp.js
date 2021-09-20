import React from 'react'
import Dashboard  from '../../Components/Dashboard';
import { EWallet } from '../../Components/EWallet';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { TransactionList } from '../../Components/TransactionList';


function MainApp() {
    return (
        <>
            <div className="bg-black">
                <Dashboard/>
            </div>
        </>
    )
}

export default MainApp
