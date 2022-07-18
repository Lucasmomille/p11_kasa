import React from 'react'
import './banner.scss'

export default function Banner({imgSrc, children}) {

    return (
        <div className="banner">
            <div className="banner__container__img">
                <img src={imgSrc} alt="" className="banner__image" loading="lazy" />
            </div>
            {children}
        </div>
    )
}
