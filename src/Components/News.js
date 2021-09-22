import {getAuth, signOut } from "@firebase/auth";
import { useEffect, useState } from "react";
import Hamburger from '../Assets/svg/Hamburger'
import { Balance } from "./Balance";
import { TransactionList } from "./TransactionList";
import Stock from "./Stock"
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
            <div class="grid lg:grid-cols-4 grid-flow-row gap-6">
                    <div class="h-40 flex-grow lg:col-span-2 bg-white bg-opacity-10 text-white rounded-xl">
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl"><a href="https://economictimes.indiatimes.com/topic/financial-markets">ECONOMICTIMES.COM</a></h1>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://economictimes.indiatimes.com/markets/stocks/news/asia-markets-yuan-fight-to-stabilise-as-evergrande-looms-large/articleshow/86386722.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst">
                        Asia markets, yuan fight to stabilise as Evergrande looms large</a></p>
                    <p className="mt-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://economictimes.indiatimes.com/markets/stocks/news/sebi-drops-adjudication-proceedings-against-ril-in-alleged-incorrect-financial-disclosures-matter/articleshow/86388976.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst">
                        Sebi drops adjudication proceedings against RIL in alleged incorrect financial disclosures matter</a></p>
                    </div>
                    <div class="h-40 flex-grow lg:col-span-2 bg-white bg-opacity-10 text-white rounded-xl" >
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl"><a href="https://www.marketwatch.com/">MARKETWATCH.COM</a></h1>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.marketwatch.com/story/facebook-overpaid-ftc-fine-as-quid-pro-quo-to-protect-zuckerberg-from-liability-shareholders-claim-11632278039?mod=home-page">
                        Facebook overpaid FTC fine as ‘quid pro quo’ to protect Zuckerberg from liability, shareholders claim</a></p>
                        <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.cnbc.com/2021/09/21/stocks-will-break-out-of-trouble-and-hit-new-record-highs-tony-dwyer.html">
                            TRADING NATION Stocks will break out of trouble and hit new record highs</a></p>
                    </div>
                    <div class="h-40 flex-grow lg:col-span-2 bg-white bg-opacity-10 text-white rounded-xl" >
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl"><a href="https://www.cnbc.com/world/?region=world">CNBC.COM</a></h1>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.cnbc.com/2021/09/22/gold-markets-federal-reserve.html">
                        Gold inches higher ahead of Fed policy decision</a></p>
                        <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.cnbc.com/2021/09/21/jim-cramer-says-investors-should-put-these-three-companies-on-their-shopping-list.html">
                        Investors should put these three companies on their ‘shopping list’</a></p>
                    </div>
                    <div class="h-40 flex-grow lg:col-span-2 bg-white bg-opacity-10 text-white rounded-xl">
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl"><a href="https://finance.yahoo.com/">YAHOO! FINANCE</a></h1>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://finance.yahoo.com/m/0bfe0a68-44fd-3d51-8fac-f16fd3debe05/when-the-stock-market-pulls.html">
                        When the stock market pulls back</a></p>
                        <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://finance.yahoo.com/news/where-home-prices-going-next-164500871.html">
                        Where home prices are going next</a></p>
                    </div>
                    <div class="h-40 flex-grow lg:col-span-2 bg-white bg-opacity-10 text-white rounded-xl" >
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl"><a href="https://www.financialexpress.com/">FINANCIAL EXPRESS</a></h1>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.financialexpress.com/market/sensex-closes-volatile-trading-day-in-red-nifty-resistance-at-17600-eyes-now-on-fomc-meet/2335420/">
                        MARKETS Sensex closes volatile trading day in red, Nifty resistance at 17,600</a></p>
                        <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.financialexpress.com/market/zomato-share-price-may-fall-9-jp-morgan-initiates-with-underweight-rating-premium-valuations-not-justified/2335158/">
                        Zomato share price may fall 9%, JP Morgan initiates with underweight rating</a></p>
                    </div>
                    <div class="h-40 flex-grow lg:col-span-2 bg-white bg-opacity-10 text-white rounded-xl">
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl"><a href="https://www.business-standard.com/finance">BUSINESS STANDARD</a></h1>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.business-standard.com/article/finance/hdfc-launches-festive-offer-cuts-home-loan-interest-rate-to-6-7-121092200020_1.html">
                        HDFC launches festive offer; cuts home loan interest rate to 6.7%</a></p>
                        <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.business-standard.com/article/finance/rupee-surges-15-paise-to-73-59-against-us-dollar-in-early-trade-121092100283_1.html">
                        Rupee surges 15 paise to 73.59 against US dollar in early trade</a></p>
                    </div>
                    <div class="h-40 flex-grow lg:col-span-2 bg-white bg-opacity-10 text-white rounded-xl" >
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl"><a href="https://www.livemint.com/">MINT</a></h1>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.livemint.com/market/ipo/india-likely-to-block-chinese-investment-in-insurance-giant-lic-s-ipo-report-11632303723350.html">
                        India likely to block Chinese investment in LIC's mega IPO</a></p>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.livemint.com/companies/news/vodafone-idea-confident-of-fundraising-deal-on-govt-package-boost-11632307080484.html">
                    Vodafone Idea will survive, confident of fundraising deal, says CEO</a></p>
                    </div>
                    <div class="h-40 flex-grow lg:col-span-2 bg-white bg-opacity-10 text-white rounded-xl">
                    <h1 className=" mt-2 text-center text-yellow-300 text-2xl"><a href="https://www.livemint.com/">BLOOMBERG | QUINT</a></h1>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href="https://www.bloombergquint.com/business/india-taps-amazon-microsoft-for-farm-tech-as-modi-eyes-reforms">
                    Amazon, Microsoft Swoop In on $24 Billion India Farm-Data Trove</a></p>
                    <p className="my-2 mx-2 text-center hover:text-yellow-300 leading-6"><a href=" https://www.bloombergquint.com/opinion/is-the-rbi-falling-behind-the-exit-curve">
                    Is The RBI Falling Behind The Exit Curve?</a></p>
                    </div>
                </div>  
            </div>
        </div>

</div>

        </>
    )
}

export default News