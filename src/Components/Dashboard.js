import { useState } from "react";
import Dropdown from "../Assets/svg/Dropdown";

export const Dashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      
        <div class="flex flex-col w-56 border-r border-gray-800">
            <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800">
                <img src="kryptonlogo1.png" alt="" />
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
                <h1 class="text-lg font-medium">Welcome</h1>
                <button class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800">
                    User Name
                </button>
                <button class="relative ml-2 text-sm focus:outline-none group" 
                onClick = {()=> openMenu()}>
                    <Dropdown />
                </button>
            </div>
            {/* Dropdown component */}
            <div class={`absolute right-10 flex flex-col top-12 z-50  w-30 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex 
            ${isMenuOpen ? "" : "hidden" }`}>
                    <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 1</a>
                    <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 2</a>
                    <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 3</a>
            </div>
            <div class="flex-grow p-6 bg-black">
                <div class="grid grid-cols-3 grid-rows-1 grid-flow-row gap-6">
                    <div class="h-80 flex-grow col-span-1 bg-white opacity-20 "></div>
                    <div class="h-80 flex-grow col-span-1 bg-white opacity-20"></div>
                    <div class="h-80 flex-grow row-span-2 bg-white opacity-20"></div>
                    <div class="h-80 flex-grow col-span-2 bg-white opacity-20"></div>
                    
                </div>
            </div>
        </div>

</div>

        </>
    )
}


// .parent {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: 1fr fr;
//     grid-column-gap: px;
//     grid-row-gap: 0px;
//     }
    
//     .div1 { grid-area: 1 / 1 / 2 / 2; }
//     .div2 { grid-area: 1 / 2 / 2 / 3; }
//     .div3 { grid-area: 1 / 3 / 3 / 4; }
//     .div4 { grid-area: 2 / 1 / 3 / 3; }