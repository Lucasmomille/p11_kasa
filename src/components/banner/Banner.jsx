import React from 'react'
import './banner.scss'

export default function Banner({imgSrc, home, children}) {

    return (
        <div className={`banner ${home}`}>
            <img src={imgSrc} alt="" className="banner__image" />

            {children}
        </div>
    )
}
