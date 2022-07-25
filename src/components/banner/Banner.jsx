import React from 'react'
import './banner.scss'

export default function Banner({imgSrc, children}) {

    return (
        <div className="banner">
            <img src={imgSrc} alt="" className="banner__image" />

            {children}
        </div>
    )
}
