import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import Banner from '../components/banner/Banner'
import Card from '../components/card/Card'

export default function Home() {
    const [data, setData] = useState([])
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    const isMobile = width <= 768;

    useEffect(() => {
        axios.get('/data/logements.json')
        .then(response => setData(response.data))
        .catch(e => console.log(e))

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])

    return (
        <Layout>
            <Banner imgSrc="/images/banner.png" home="banner__home">
                <h2 className="banner__title">Chez vous,{isMobile && <br></br>} partout et ailleurs</h2>
            </Banner>
            <div className="wrapper">
                {data.map((card, dataIdx) => (
                <Card
                    key={dataIdx}
                    card={card}
                ></Card>
                ))}
            </div>
        </Layout>
    )
}