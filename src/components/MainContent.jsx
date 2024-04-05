import React from 'react'
import NavBar from '../components/NavBar.jsx'
import { Route, Routes } from 'react-router'
import MonumentFiltradosPage from '../pages/MonumentFiltradosPage.jsx'

const MainContent = () => {
    return (
        <div>
            <MonumentFiltradosPage/>
        </div >
    )
}

export default MainContent;