import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Layout from '../components/Layout'
import SvgComponent from '../components/svgComponent/SvgComponent'

import Dropdown from '../components/dropdown/DropDown'

export default function Product() {
    const { id } = useParams()

    const [data, setData] = useState([])
    
    console.log('params', id)
    useEffect(() => {
        axios.get('/data/logements.json')
        .then(response => setData(response.data))
        .catch(e => console.log(e))
    }, [])
    const product = data.find(card => card.id === id)
    console.log('product', product)
    return (
        <Fragment>
            { product ? <Layout>
                <div className='product__banner'>
                    <img src={product.cover} alt="logement" className='product__img' />
                </div>
                <div className="product__container">
                    <h1>{product.title}</h1>
                    <h2>{product.location}</h2>
                    <div className='tag'>
                        {
                            product.tags.map(tag => 
                            <div className='tag__name'>{tag}</div>
                            )
                        }
                    </div>
                    <Dropdown title="Description" content={product.description}></Dropdown>
                    { Array.from({ length: 5 }, (_, i) => (
                        <SvgComponent
                            key={i} 
                            name="star"
                            className={`${i < product.rating ? 'fill-primary' : 'fill-empty'}`}
                        ></SvgComponent>
                    ))}
                </div>
            </Layout> : <div></div>}
        </Fragment>
    )
}