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
import AdminEventPage from '../pages/AdminEventPage'

const MainContent = () => {
    return (
        <Routes>
            <Route element={<HomePage />} path="/:idioma/MeCa"></Route>
            <Route element={<ListPage />} path="/:idioma/monumentos"></Route>
            <Route element={<AuthorPage />} path="/:idioma/autores/:nombreAutor"></Route>
            <Route element={<EventPage />} path="/:idioma/eventos/:idEvento"></Route>
            <Route element={<MonumentPage />} path="/:idioma/monumentos/:idMonumento"></Route>
            <Route element={<ProfilePageEditar />} path="/:idioma/perfil/editar"></Route>
            <Route element={<FavoritePage />} path="/:idioma/favoritos/:nickname"></Route>
            <Route element={<BlogPage />} path="/:idioma/entradas/:nickname"></Route>
            <Route element={<RoutePage />} path="/:idioma/rutas/:idRuta"></Route>
            <Route element={<SearchPage />} path="/:idioma/busqueda"></Route>
            <Route element={<BlogPage />} path="/:idioma/blog"></Route>
            <Route element={<AchievementPage />} path="/:idioma/logros"></Route>
            <Route element={<ActionHistorial />} path="/:idioma/notificaciones"></Route>
            <Route element={<RankingPage />} path="/:idioma/clasificacion"></Route>
            <Route element={<InfoPage />} path="/:idioma/info"></Route>
            <Route element={<RegisterLoginPage />} path="/:idioma/registro, /login"></Route>
            <Route element={<TermsConditionsPage />} path="/:idioma/termsconditions"></Route>
            <Route element={<UnEventPage />} path="/:idioma/unevent"></Route>
            <Route element={<ContactUs />} path="/:idioma/contactanos"></Route>
            <Route element={<AdminPage />} path="/admin"></Route>
            <Route element={<NewPostPage />} path="/:idioma/perfil/newPost"></Route>
            <Route element={<AdminEventPage />} path="/:idioma/admineventpage"></Route>
        </Routes >
    )
}

export default MainContent;