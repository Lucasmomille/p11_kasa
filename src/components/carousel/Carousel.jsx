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
    const pagination = current + 1 +'/'+ slides.length
    
    return (
        <div className='carousel' tabIndex={0}>
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
            {slides.length > 1 && 
                <>
                    <span onClick={() => prevSlide()} ariaLabel="control" role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && prevSlide()} className={`slide slide__previous `} data-testid="prevBtn">
                        <SvgComponent
                            name="arrowDown"
                            className='fill-white'
                        ></SvgComponent>
                    </span>
                    <span onClick={() => nextSlide()} ariaLabel="control" role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && nextSlide()} className={`slide slide__next `}>
                        <SvgComponent
                            name="arrowDown"
                            className='fill-white'
                        ></SvgComponent>
                    </span>
                    <span className='carousel__pagination'>{pagination}</span>
                </>
            }
        </div>
    )
}
