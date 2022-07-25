import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Layout from '../components/Layout'
import SvgComponent from '../components/svgComponent/SvgComponent'
import Profile from '../components/product/profile/Profile'
import Carousel from '../components/carousel/Carousel'
import ErrorPage from '../pages/error'

import Dropdown from '../components/dropdown/DropDown'

export default function Product() {
    const { id } = useParams()

    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('/data/logements.json')
        .then(response => setData(response.data))
        .catch(e => console.log(e))
    }, [])

    const product = data.find(product => product.id === id)
    
    const images = product ? product.pictures : [];
    

    return (
        <Fragment>
            { product ? <Layout>
                <Carousel slides={images}></Carousel>
                <div className="product__container">
                    <div className='product__header'>
                        <div className='product__info'>
                            <h1>{product.title}</h1>
                            <h2>{product.location}</h2>
                            
                            <div className='tag'>
                                {
                                    product.tags.map((tag, index) => 
                                    <div className='tag__name' key={`tag-${index}`}>{tag}</div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='product__reassurance'>
                            <Profile host={product.host}></Profile>
                            <div className='product__reassurance__rating'>
                                { Array.from({ length: 5 }, (_, i) => (
                                    <SvgComponent
                                        key={i} 
                                        name="star"
                                        className={`${i < product.rating ? 'fill-primary' : 'fill-empty'}`}
                                    ></SvgComponent>
                                ))}
                            </div>
                        </div>
                    </div> 
                    <div className='product__description'>
                        <Dropdown title="Description" content={product.description}></Dropdown>
                        <Dropdown title="&Eacute;quipements" content={product.equipments}></Dropdown>
                    </div>                   
                </div>
            </Layout> : 
            <ErrorPage></ErrorPage>}
        </Fragment>
    )
}