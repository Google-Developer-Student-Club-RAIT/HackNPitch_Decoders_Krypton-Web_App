import {getAuth, signOut } from "@firebase/auth";
import { useEffect, useState } from "react";
import Hamburger from '../Assets/svg/Hamburger'
// import { Balance } from "./Balance";
// import { TransactionList } from "./TransactionList";
// import Stock from "./Stock"
import {Link} from 'react-router-dom'
// import News from "./News";
import bgImg from '../Assets/img/bg-removebg.png'

import { useHistory } from "react-router-dom";

const News = () => {
    const history = useHistory();

    const auth = getAuth();
    const user = auth.currentUser;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    
    // news api
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        const getArticles = async() => {
            const res = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/in.json')

            const data = await res.json();
            return data
        }
        getArticles().then(data => setArticles(data))
        .catch(err => console.log(err));
    },[])
    

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
            <div class="flex-grow p-6 bg-black overflow-y-auto">
            <img src={bgImg} alt="" srcset="" className = "hidden lg:block lg:absolute lg:right-0 mt-10 lg:top-5 lg:opacity-30 lg:w-1/5 "/>
            <div class="grid lg:grid-cols-3.5 grid-flow-row gap-5 overflow-y-auto h-full">
                {(articles.articles !== undefined) ? articles.articles.map((elem) => {
                    return(
                        <div className="p-8 bg-white bg-opacity-10 rounded-lg  text-white">
                            <p className="mb-3 text-xs text-white font-semibold tracking-wide uppercase">
                            <a
                                href={elem.url}
                                target = "_blank"
                                rel="noreferrer"
                                className=" text-yellow-300 duration-200"
                                aria-label="Category"
                            >
                                Finance
                            </a>
                            </p>
                            <a
                            href={elem.url}
                            target = "_blank"
                            rel="noreferrer"
                            aria-label="Article"
                            title="Jingle Bells"
                            className="inline-block mb-3 text-2xl font-bold leading-7 text-white "
                            >
                            {elem.title}
                            </a>
                            <div className="flex items-center">
                            <div>
                                <a
                                href={elem.url}
                                target = "_blank"
                                rel="noreferrer"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-white hover:text-yellow-300"
                                >
                                {elem.source.name}
                                </a>
                                <p className="text-sm font-medium leading-4 text-gray-400 hover:text-yellow-300">
                                Source
                                </p>
                            </div>
                            </div>
                        </div>
                    )
                }): console.log("error while fetching data")}
            </div>  
            </div>
        </div>

</div>

        </>
    )
}

export default News


