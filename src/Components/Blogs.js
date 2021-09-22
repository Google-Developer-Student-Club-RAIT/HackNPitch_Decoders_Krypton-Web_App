import {getAuth, signOut } from "@firebase/auth";
import { useEffect, useState } from "react";
import Hamburger from '../Assets/svg/Hamburger'
import { Balance } from "./Balance";
import { TransactionList } from "./TransactionList";
import Stock from "./Stock"
import {Link} from 'react-router-dom'
import News from "./News";
import bgImg from '../Assets/img/bg-removebg.png'

import { useHistory } from "react-router-dom";

const Blogs = () => {
    const history = useHistory();

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
        <div className="flex w-screen h-screen text-gray-400 bg-black">
        <div className={`${isSideBarOpen ? "" : "hidden"} absolute z-50 h-full lg:relative lg:z-0  bg-black lg:flex lg:flex-col w-56 border-r border-gray-800`}>
            <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800">
                <img src="/kryptonlogo1.png" alt="" className = "w-1/2"/>
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
            <div class="grid lg:grid-cols-3 grid-flow-row gap-5">
            <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl">
                    <h2 className="flex items-center text-yellow-300 justify-center md:text-2xl mt-2 text-center z-40 text-white py-4" >GET WEEKLY INSIGHTS AND FACTS RIGHT IN YOUR INBOX</h2>
                    <form className="flex flex-row items-center w-full mb-4 mt-24 md:flex-row md:px-10 border-opacity-0 pb-4">
                     <input
                        placeholder="Email"
                        required=""
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 bg-gray-200 border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0  focus:outline-none focus:shadow-outline "
                     />
                     <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black bg-gray-200 hover:bg-yellow-400 transition duration-200 rounded shadow-md md:w-auto "
                        >Subscribe
                     </button>
                    </form>
                    </div>
                    <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl">
                        <h1 className=" mt-2 text-center text-yellow-300 text-2xl">How to read stock charts</h1>
                        <p className="my-4 mx-4 leading-6">In this segment, we will review some basic stock chart patterns that are used for 
                        stock chart analysis and drawing important conclusions. Chart patterns are divided into reversal patterns and continuation
                         patterns. Note that these patterns can be used for all types of charts, except for point and figure charts.</p>
                        <h3 className="text-center text-lg text-white hover:text-yellow-300"><a href="https://www.kotaksecurities.com/ksweb/share-market/how-to-read-stock-charts">Read Here..</a></h3>
                    </div>
                    <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl" >
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl">Approaches to select stock</h1>
                    <p className="my-4 mx-4 leading-6">Fundamental analysis has different sub-approaches to stock picking. All these sub-approaches focus
                     on the underlying business of the companies. However, they differ in the methods of selecting stocks for detailed analysis and the 
                     features of stocks, which are focused on future gains.</p>
                     <h3 className="text-center text-lg text-white hover:text-yellow-300"><a href="https://www.kotaksecurities.com/ksweb/Meaningful-Minutes/Two-approaches-to-select-stocks">Read Here..</a></h3>
                    </div>
                    <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl" >
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl">Points to keep in mind while reading stock recommendations</h1>
                    <p className="my-4 mx-4 leading-6">Every investor comes across stock recommendations at some point in time or the other. 
                    This may be through your brokerage firm, business channels and websites, or even pink papers.However, 
                    it may not always be easy to follow these recommendations.</p>
                     <h3 className="text-center text-lg text-white hover:text-yellow-300"><a href="https://www.kotaksecurities.com/ksweb/Meaningful-Minutes/6-points-to-keep-in-mind-while-reading-stock-recommendations?utm_source=fa_knowledgebank&utm_medium=fa_knowledgebank_ReadStockCharts&utm_campaign=Knowledgebank&utm_content=%20Knowledgebank&utm_term=Knowledgebank">Read Here..</a></h3>
                    </div>
                    <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl">
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl">Is Day Trading a Good Idea?</h1>
                    <p className="my-4 mx-4 leading-6">Day traders typically target stocks, options, futures, commodities or currencies, holding positions for hours or minutes before selling again. 
                    Day traders enter and exit positions within the day, hence the term day traders.They rarely hold positions overnight. The goal is to profit from short-term price movements. </p>
                     <h3 className="text-center text-lg text-white hover:text-yellow-300"><a href="https://www.investopedia.com/articles/active-trading/053115/average-rate-return-day-traders.asp">Read Here..</a></h3>
                    </div>
                    <div class="h-80 flex-grow lg:col-span-1 bg-white bg-opacity-10 text-white rounded-xl">
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl">Why Financial Management is important?</h1>
                    <p className="my-4 mx-4 leading-6">Helps organisations in financial planning;
                    Assists organisations in the planning and acquisition of funds;
                    Helps organisations in effectively utilising and allocating the funds received or acquired;
                    Assists organisations in making critical financial decisions;
                    Helps in improving the profitability of organisations.</p>
                     <h3 className="text-center text-lg text-white hover:text-yellow-300"><a href="https://www.lsbf.org.uk/blog/news/importance-of-financial-management/117410">Read Here..</a></h3>
                    </div>
                </div>
            </div>
        </div>

</div>

        </>
    )
}

export default Blogs