import React from 'react'
import SvgComponent from '../svgComponent/SvgComponent'
import './footer.scss'

export default function Carousel() {

    return (
        <div className='footer'>
            <SvgComponent
                name="logo"
                className='fill-white footer__logo'
            ></SvgComponent>
            <p>© 2020 Kasa. All Rights Reserved.</p>
        </div>
    )
}
