import React from 'react'
import Dashboard  from '../../Components/Dashboard';
import { EWallet } from '../../Components/EWallet';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { TransactionList } from '../../Components/TransactionList';


function MainApp() {
    return (
        <>
        <BrowserRouter>
        <Switch>
        <div className = "bg-black ">
            <Route exact="/dashboard" component={Dashboard}></Route>
        </div>
        <Route exact="/e-wallet" component={EWallet}></Route>
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default MainApp
