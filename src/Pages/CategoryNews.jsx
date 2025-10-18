import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';
import { useLoading } from '../Components/Loading';
import MainLoading from '../Components/MainLoading';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const {loading, setLoading} = useLoading()
    const [categorieNews, setCategorieNews] = useState([])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            if(id === "0"){
                setCategorieNews(data)
            }
            else if(id === "1"){
                const filtaredNews = data.filter(d => d.others.is_today_pick === true)
                setCategorieNews(filtaredNews)
            }
            else{
                const filtaredNews = data.filter(d => d.category_id === parseInt(id))
                setCategorieNews(filtaredNews)
            }
            setLoading(false)
        }, 500)
    }, [id, data, setLoading])
    
    return (
        <div>
            <h1>news found({categorieNews.length})</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    loading ? <MainLoading/> : categorieNews.length === 0 ? <h1>No Data</h1> : categorieNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;