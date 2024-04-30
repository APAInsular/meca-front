import React from 'react'
import { Route, Routes } from 'react-router'

import AuthorPage from '../pages/AuthorPage'
import AdminPage from '../pages/AdminPage'
import HomePage from '../pages/HomePage'
import BlogPage from '../pages/BlogPage'
import ActionHistorial from '../pages/ActionHistorial'
import AchievementPage from '../pages/AchievementPage'
import EventPage from '../pages/EventPage'
import FavoritePage from '../pages/FavoritePage'
import MonumentPage from '../pages/MonumentPage'
import RankingPage from '../pages/RankingPage'
import RoutePage from '../pages/RoutePage'
import SearchPage from '../pages/SearchPage'
import InfoPage from '../pages/InfoPage'
import ListPage from '../pages/ListPage'
import TermsConditionsPage from '../pages/TermsConditionsPage'
import UnEventPage from "../pages/UnEventPage"
import ContactUs from '../pages/ContactUsPage'
import RegisterLoginPage from '../pages/RegisterLoginPage'
// import AdminEventPage from 'src/pages/AdminEventPage'
// import ProfilePageEditar from 'src/pages/ProfilePageEditar'
import NewPostPage from '../pages/NewPostPage'
import ProfilePageEditar from '../pages/ProfilePageEditar'
import MonumentFiltradosPage from '../pages/MonumentFiltradosPage'
import AdminEventPage from '../pages/AdminEventPage'

const MainContent = () => {
    return (
        <Routes>
            <Route element={<HomePage />} path="/"></Route>
            <Route element={<ListPage />} path="/autores, /estilos, /eventos, /monumentos" />
            <Route element={<AuthorPage />} path="/autores/:nombreAutor"></Route>
            <Route element={<EventPage />} path="/eventos/:idEvento"></Route>
            <Route element={<MonumentPage />} path="/monumentos/:nombreMonumento"></Route>
            <Route element={<ProfilePageEditar />} path="/perfil/editar"></Route>
            <Route element={<FavoritePage />} path="/favoritos/:nickname"></Route>
            <Route element={<BlogPage />} path="/entradas/:nickname"></Route>
            <Route element={<RoutePage />} path="/rutas/:idRuta"></Route>
            <Route element={<SearchPage />} path="/busqueda"></Route>
            <Route element={<BlogPage />} path="/blog"></Route>
            <Route element={<AchievementPage />} path="/logros"></Route>
            <Route element={<ActionHistorial />} path="/notificaciones"></Route>
            <Route element={<RankingPage />} path="/clasificacion"></Route>
            <Route element={<InfoPage />} path="/info"></Route>
            <Route element={<RegisterLoginPage />} path="/registro, /login"></Route>
            <Route element={<TermsConditionsPage />} path="/termsconditions"></Route>
            <Route element={<UnEventPage />} path="/unevent"></Route>
            <Route element={<ContactUs />} path="/contactanos"></Route>
            <Route element={<AdminPage />} path="/admin"></Route>
            <Route element={<NewPostPage />} path="/perfil/newPost"></Route>
            <Route element={<AdminEventPage />} path="/admineventpage"></Route>
            <Route element={<MonumentFiltradosPage />} path="/filtrados"></Route>
        </Routes >
    )
}

export default MainContent;