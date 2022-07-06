import React from 'react'
import { Link } from "react-router-dom";
import './card.scss'

export default function Card(card) {
    return (
        <div className='card'>
            <Link to={`/product/${card.card.id}`}>
                <div className='card__thumb'>
                    <img src={card.card.cover} alt="logement" className='card__image' />
                    <h2 className="card__title">{card.card.title}</h2>
                </div>
            </Link>
        </div>
    )
}
