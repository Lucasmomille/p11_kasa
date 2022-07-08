import React from 'react'
import './banner.scss'

export default function Banner() {

    return (
        <div className="banner">
            <div className="banner__container__img">
                <img src="/images/banner.png" alt="vue sur une montagne nuageuse" className="banner__image" />
            </div>
            <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
        </div>
    )
}
