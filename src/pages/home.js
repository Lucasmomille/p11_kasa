import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import Banner from '../components/banner/Banner'
import Card from '../components/card/Card'

export default function Home() {
    /* const url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json';
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    } */
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/data/logements.json')
        .then(response => setData(response.data))
        .catch(e => console.log(e))
    }, [])

    return (
        <Layout>
            <Banner></Banner>
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