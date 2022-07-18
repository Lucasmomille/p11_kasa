import React, { Fragment } from 'react'
import NavBar from './navbar/NavBar'
import Footer from './footer/Footer'
import'./layout.scss'

export default function Layout({ children }) {

    return (
        <Fragment>
            <NavBar></NavBar>
            <main className="main">
                {children}
            </main>
            <Footer></Footer>
        </Fragment>
    )
}