import React, { Fragment } from 'react'
import NavBar from './navbar/NavBar'
import'./layout.scss'

export default function Layout({ children}) {

    return (
        <Fragment>
            <NavBar></NavBar>
            <main className="layout">
                {children}
            </main>
        </Fragment>
    )
}