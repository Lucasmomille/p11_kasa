import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import Banner from '../components/banner/Banner'
import Card from '../components/card/Card'

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/data/logements.json')
        .then(response => setData(response.data))
        .catch(e => console.log(e))
    }, [])

    return (
        <Layout>
            <Banner imgSrc="/images/banner.png">
                <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
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