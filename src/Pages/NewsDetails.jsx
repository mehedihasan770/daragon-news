import React, { useEffect } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import { useState } from 'react';

const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        const newsDetails = data.find(detailsd => detailsd.id === id)
        setNews(newsDetails)
    }, [data,id])


    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-10'>
                <section className='col-span-9'>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;