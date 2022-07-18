import React, { useState } from 'react'
import SvgComponent from '../svgComponent/SvgComponent'
import './carousel.scss'

export default function Carousel({slides}) {
    const [current, setCurrent] = useState(0)
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    }
    return (
        <div className='carousel'>
            {slides.map((image, index) => 
                {return (
                    <>
                        {index === current &&
                            <img
                                src={image} 
                                key={`item-${index}`} 
                                alt="logement" 
                                className='carousel__img' 
                                loading="lazy"
                            />
                        }
                    </>
                )}
            )}
            <span onClick={() => prevSlide()} className={`slide slide__previous `}>
                <SvgComponent
                    name="arrowDown"
                    className='fill-white'
                ></SvgComponent>
            </span>
            <span onClick={() => nextSlide()} className={`slide slide__next `}>
                <SvgComponent
                    name="arrowDown"
                    className='fill-white'
                ></SvgComponent>
            </span>
        </div>
    )
}
