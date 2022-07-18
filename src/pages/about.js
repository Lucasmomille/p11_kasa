import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/banner/Banner'
import Dropdown from '../components/dropdown/DropDown'

export default function Home() {

    return (
        <Layout>
            <Banner imgSrc='/images/about_uncut.png'></Banner>

            <div className="about">
                <Dropdown title="Fiabilité" content=""></Dropdown>
                <Dropdown title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."></Dropdown>
                <Dropdown title="Service" content=""></Dropdown>
                <Dropdown title="Responsabilité" content=""></Dropdown>
            </div>
        </Layout>
    )
}