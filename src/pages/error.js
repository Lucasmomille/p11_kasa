import React from 'react'
import Layout from '../components/Layout'

export default function Error() {
    return (
        <Layout>
            <div className="error">
                <h1 className="error__title">404</h1>
                <p>Oups&nbsp;! La page que vous demandez n'existe pas</p>
                <a href="/">Retourner sur la page d'accueil</a>
            </div>
        </Layout>
    )
}
