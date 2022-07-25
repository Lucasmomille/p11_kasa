import React from 'react'
import { NavLink } from "react-router-dom";
import './navbar.scss'

export default function NavBar() {

    return (
        <div className="navbar">
            <img alt="logo de Kasa" src="/images/logo_kasa.png" className="navbar__image"></img>
            <ul className="navbar__list">
                <li>
                    <NavLink
                        to="/"
                        className="navbar__list__option"
                        style={({ isActive }) =>
                            isActive ? {borderColor: '#FF6060'} : undefined
                        }
                    >Accueil</NavLink></li>
                <li>
                    <NavLink
                        to="/about"
                        className="navbar__list__option"
                        style={({ isActive }) =>
                            isActive ? {borderColor: '#FF6060'} : undefined
                        }
                    >A Propos</NavLink></li>
            </ul>
        </div>
    )
}