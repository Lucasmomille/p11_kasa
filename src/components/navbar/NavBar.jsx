import React from 'react'
import { NavLink } from "react-router-dom";
import './navbar.scss'

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="navbar__image">
                <img alt="logo de Kasa" src="/images/logo_kasa.png"></img>
            </div>
            <ul className="navbar__list">
                <li className="">
                    <NavLink
                        exact
                        to="/"
                        className="navbar__list__option"
                        activeClassName="active"
                    >Accueil</NavLink></li>
                <li className="">
                    <NavLink
                        to="/about"
                        className="navbar__list__option"
                        activeClassName="active"
                    >A Propos</NavLink></li>
            </ul>
        </div>
    )
}