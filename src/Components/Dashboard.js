import {getAuth, signOut } from "@firebase/auth";
import { useEffect, useState } from "react";
import Hamburger from '../Assets/svg/Hamburger'
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    let history = useHistory()
    const auth = getAuth();
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

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            history.push('/')
        }
    }, [])

    const openMenu = () => {
        if (isMenuOpen === false) {
            setIsMenuOpen(true)
        }
        else{
            setIsMenuOpen(false)
        }
    }
    

    return (
        <>
        <div class="flex w-screen h-screen text-gray-400 bg-black">
        <div class={`${isSideBarOpen ? "" : "hidden"} absolute z-50 h-full lg:relative lg:z-0  bg-black lg:flex lg:flex-col w-56 border-r border-gray-800`}>
            <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800">
                <img src="kryptonlogo1.png" alt="" className = "w-1/2"/>
                <button onClick = {() => setIsSidebarOpen(false)} className = "lg:hidden">
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>
            <div class="flex flex-col flex-grow p-4 overflow-auto">
                <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" href="#">
                    <span class="leading-none">Dashboard</span>
                </a>
                <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" href="#">
                    <span class="leading-none">E-wallet</span>
                </a>
                <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" href="#">
                    <span class="leading-none">Stock Insight</span>
                </a>
                <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" href="#">
                    <span class="leading-none">News</span>
                </a>
                <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" href="#">
                    <span class="leading-none">Blogs</span>
                </a>
            </div>
        </div>
        <div class="flex flex-col flex-grow ">
            <div class="flex items-center h-16 px-8 border-b border-gray-800">
                <button onClick = {() => setIsSidebarOpen(true)} className = "lg:hidden">
                    <Hamburger/>
                </button>
                <h1 class="text-lg font-medium px-4">Welcome</h1>
                <button class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800" onClick = {()=> openMenu()} >
                    {user ? user.displayName : "Anonymous User"}
                    <i class="fas fa-angle-down px-2"></i>
                </button>
                {/* <button class="flex justify-center content-center relative ml-2 text-sm focus:outline-none group" 
                onClick = {()=> openMenu()}>
                    <Dropdown />
                </button> */}
            </div>
            {/* Dropdown component */}
            <div class={`absolute right-10 flex flex-col top-12 z-50  w-30 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex 
            ${isMenuOpen ? "" : "hidden" }`}>
                    <button onClick = {logout} class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Logout</button>
            </div>
            <div class="flex-grow p-6 bg-black">
                <div class="grid lg:grid-cols-3 lg:grid-rows-1 grid-flow-row gap-6">
                    <div class="h-80 flex-grow lg:col-span-1 bg-white opacity-20 "></div>
                    <div class="h-80 flex-grow lg:col-span-1 bg-white opacity-20"></div>
                    <div class="h-80 flex-grow lg:row-span-2 bg-white opacity-20"></div>
                    <div class="h-80 flex-grow lg:col-span-2 bg-white opacity-20"></div>
                </div>
            </div>
        </div>

</div>

        </>
    )
}

export default Dashboard