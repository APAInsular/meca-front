import React from 'react'
import AuthorPage from '../pages/AuthorPage'
import { Route, Routes } from 'react-router'

const MainContent = () => {
    return (
        <Routes>
            <Route element={<AuthorPage />} path="/:nombreAutor"></Route>
        </Routes >
    )
}

export default MainContent;