import React,{useEffect,useState} from 'react'

function NewsApi() {
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        const getArticles = async() => {
            const res = await fetch('https://newsapi.org/v2/top-headlines?apiKey=479afad057c54301a9754795b8271da0&q=stock')

            const data = await res.json();
            return data
        }
        getArticles().then(data => setArticles(data))
        .catch(err => console.log(err));
    },[])
    console.log(articles.articles)
    return (
        <>  
            {(articles.articles !== undefined) ? articles.articles.map((elem) => {
                return(
                    <div className = "bg-transparent  ">
                        <h1 className=" mt-5  text-yellow-300 text-xl">
                            <a href={elem.url} target = "_blank">{elem.source.name}</a>
                        </h1>
                        <p className=" hover:text-yellow-300 text-xl">
                            <a href={elem.url} target = "_blank" >{elem.title}</a>
                        </p>
                    </div>
                )
            }): console.log("error while fetching data")}
        </>
    )
}

export default NewsApi
