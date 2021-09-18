
export const Dashboard = () => {
    return (
        <>
        <div class="flex w-screen h-screen text-gray-400 bg-black">
      
        <div class="flex flex-col w-56 border-r border-gray-800">
            <button class="relative text-sm focus:outline-none group">
                <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800">
                    <img src="kryptonlogo1.png" alt="" />
                </div>
                
            </button>
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
                <button class="relative ml-2 text-sm focus:outline-none group">
                    <div class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-800">
                        <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </button>
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