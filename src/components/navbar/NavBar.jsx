import React from 'react'
import { Link } from "react-router-dom";
import './navbar.scss'

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="navbar__image">
                <img alt="logo de Kasa" src="/images/logo_kasa.png"></img>
            </div>
            <ul className="navbar__list">
                <li className="navbar__list__option"><Link to="/">Accueil</Link></li>
                <li className="navbar__list__option"><Link to="/">A Propos</Link></li>
            </ul>
        </div>
    )
}