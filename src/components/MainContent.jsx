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
import RegisterPage from '../pages/RegisterPage'
import ListPage from '../pages/ListPage'
import LoginPage from '../pages/LoginPage'
import EntradaPage from '../pages/EntradaPage'
import TermsConditionsPage from '../pages/TermsConditionsPage'
import UnEventPage from '../pages/UnEventPage'
import MonumentFiltradosPage from 'src/pages/MonumentFiltradosPage'
import ContactUs from 'src/pages/ContactUsPage'
// import AdminEventPage from 'src/pages/AdminEventPage'
const MainContent = () => {
    return (
        <Routes>
            <Route element={<HomePage />} path="/"></Route>
            <Route element={<ListPage />} path="/autores"></Route>
            <Route element={<ListPage />} path="/estilos"></Route>
            <Route element={<ListPage />} path="/eventos"></Route>
            <Route element={<ListPage />} path="/monumentos"></Route>
            <Route element={<AuthorPage />} path="/autores/:nombreAutor"></Route>
            <Route element={<EventPage />} path="/eventos/:idEvento"></Route>
            <Route element={<MonumentPage />} path="/monumentos/:nombreMonumento"></Route>
            <Route element={<ProfilePage />} path="/perfil"></Route>
            {/* <Route element={<ProfilePageEditar />} path="/perfil/:nickname/editar"></Route> */}
            <Route element={<FavoritePage />} path="/favoritos/:nickname"></Route>
            <Route element={<BlogPage />} path="/entradas/:nickname"></Route>
            <Route element={<RoutePage />} path="/rutas/:idRuta"></Route>
            <Route element={<SearchPage />} path="/busqueda"></Route>
            <Route element={<BlogPage />} path="/blog"></Route>
            <Route element={<EntradaPage />} path="/blog/:idEntrada"></Route>
            <Route element={<AchievementPage />} path="/logros"></Route>
            <Route element={<ActionHistorial />} path="/notificaciones"></Route>
            <Route element={<RankingPage />} path="/clasificacion"></Route>
            <Route element={<InfoPage />} path="/info"></Route>
            <Route element={<RegisterPage />} path="/registro"></Route>
            <Route element={<LoginPage />} path="/login"></Route>
            <Route element={<ContactUs />} path="/contactanos"></Route>
            <Route element={<TermsConditionsPage />} path="/termsconditions"></Route>
            <Route element={<UnEventPage />} path="/unevent"></Route>
            <Route element={<MonumentFiltradosPage/>} path="/monumentfiltrados"></Route>
            {/* <Route element={<AdminEventPage/>} path="/adminevent"></Route> */}
        </Routes >
    )
}

export default MainContent;