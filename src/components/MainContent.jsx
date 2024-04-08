import React from 'react'

import AuthorPage from '../pages/AuthorPage'
import HomePage from '../pages/HomePage'
import BlogPage from '../pages/BlogPage'
import ActionHistorial from '../pages/ActionHistorial'
import AchievementPage from '../pages/AchievementPage'
import EventPage from '../pages/EventPage'
import FavoritePage from '../pages/FavoritePage'
import MonumentPage from '../pages/MonumentPage'
import ProfilePage from '../pages/ProfilePage'
import RankingPage from '../pages/RankingPage'
import RoutePage from '../pages/RoutePage'
import SearchPage from '../pages/SearchPage'
import InfoPage from '../pages/InfoPage'
import { Route, Routes } from 'react-router'

const MainContent = () => {
    return (
        <Routes>
            <Route element={<HomePage />} path="/"></Route>
            <Route element={<AuthorPage />} path="/:nombreAutor"></Route>
            <Route element={<EventPage />} path="/:id"></Route>
            <Route element={<MonumentPage />} path="/:nombreMonumento"></Route>
            <Route element={<ProfilePage />} path="/:nickname/perfil"></Route>
            <Route element={<FavoritePage />} path="/:nickname/favoritos"></Route>
            <Route element={<RoutePage />} path="/:id"></Route>
            <Route element={<SearchPage />} path="/busqueda"></Route>
            <Route element={<BlogPage />} path="/blog"></Route>
            <Route element={<AchievementPage />} path="/logros"></Route>
            <Route element={<ActionHistorial />} path="/notificaciones"></Route>
            <Route element={<RankingPage />} path="/ranking"></Route>
            <Route element={<InfoPage />} path="/info"></Route>
        </Routes >
    )
}

export default MainContent;