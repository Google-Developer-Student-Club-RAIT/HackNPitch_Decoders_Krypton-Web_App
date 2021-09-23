import {getAuth, signOut } from "@firebase/auth";
import { useEffect, useState } from "react";
import Hamburger from '../Assets/svg/Hamburger'
import { Balance } from "./Balance";
import { TransactionList } from "./TransactionList";
import Stock from "./Stock"
import {Link} from 'react-router-dom'
import News from "./News";
import bgImg from '../Assets/img/bg-removebg.png'

import NewsApi from '../Components/NewsApi'

import { getFirestore } from "@firebase/firestore"
import { collection, onSnapshot } from "@firebase/firestore";

import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const history = useHistory();

    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);

    

    const logout = () => { 
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                history.push('/')
            })
            .catch((e) => alert(e))
    }
    // auth edgecases
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            history.push('/')
        }
    }, [])

    // firestore
    // useEffect(() => {
    //     onSnapshot(collection(db,"users"),(snapshot) => {
    //         console.log(snapshot.docs.map(doc => {
    //             console.log(doc.data())
    //         }))
    //     }); 
    // }, [])

    const openMenu = () => {
        if (isMenuOpen === false) {
            setIsMenuOpen(true)
        }
        else{
            setIsMenuOpen(false)
        }
    }
    const headlinestyle={
        height: "85vh",
    }
    
    return (
        <>
        <div className="flex w-screen h-screen text-gray-400 bg-black">
        <div className={`${isSideBarOpen ? "" : "hidden"} absolute z-50 h-full lg:relative lg:z-0  bg-black lg:flex lg:flex-col w-56 border-r border-gray-800`}>
            <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800">
                <img src="kryptonlogo1.png" alt="" className = "w-1/2"/>
                <button onClick = {() => setIsSidebarOpen(false)} className = "lg:hidden">
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <div class="flex flex-col flex-grow p-4 overflow-auto">
                <Link class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard">
                    Dashboard
                </Link>
                <Link class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard/ewallet">
                    E-wallet
                </Link>
                <Link className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard/stockinsight">
                    <span className="leading-none">Stock Insight</span>
                </Link>
                <Link className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard/news">
                    <span className="leading-none">News</span>
                </Link>
                <Link className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" to="/dashboard/blogs">
                    <span className="leading-none">Blogs</span>
                </Link>
            </div>
        </div>
        <div className="flex flex-col flex-grow ">
            <div className="flex items-center h-16 px-8 border-b border-gray-800">
                <button onClick = {() => setIsSidebarOpen(true)} className = "lg:hidden">
                    <Hamburger/>
                </button>
                <h1 className="text-lg font-medium px-4">Welcome</h1>
                <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800" onClick = {()=> openMenu()} >
                    {user ? user.displayName : "Anonymous User"}
                    <i className="fas fa-angle-down px-2"></i>
                </button>
            </div>
            {/* Dropdown component */}
            <div className={`absolute right-10 flex flex-col top-12 z-50  w-30 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex 
            ${isMenuOpen ? "" : "hidden" }`}>
                    <button onClick = {logout} className="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Logout</button>
            </div>
            <div class="flex-grow p-6 bg-black">
            <img src={bgImg} alt="" srcset="" className = "hidden lg:block lg:absolute lg:right-0 mt-10 lg:top-5 lg:opacity-30 lg:w-1/5 "/>
                <div class="grid lg:grid-cols-3 lg:grid-rows-1 grid-flow-row gap-6">
                    <div class="h-80 w-80 lg:w-auto flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl">{<Balance />}</div>
                    <div class=" h-80 w-80 lg:w-auto flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl overflow-y-auto">{<TransactionList/>}</div>
                    <div class="lg:w-80 flex-grow lg:row-span-2 bg-white bg-opacity-10 text-white text-4xl pl-4 pt-4 rounded-xl overflow-y-auto" style={headlinestyle}>
                        HEADLINES
                        <NewsApi/>
                    </div>
                    <div class="md:visibility-hidden lg:max-w-2xl flex-grow lg:col-span-2 bg-white bg-opacity-10 text-white rounded-xl justify-items-center">{<Stock />}</div>
                </div>
            </div>
        </div>

</div>

        </>
    )
}

export default Dashboard