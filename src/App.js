import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ProfilePage from './pages/ProfilePage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  const path = window.location.pathname.split("/")[1];

  console.log(path);

  return (
    <div className="App m-0 p-0">
      {
        path === "perfil" ? (
          <Routes>
            <Route element={<ProfilePage />} path={"/perfil"}></Route>
          </Routes>
        ) : (
          <>
            <NavBar />
            <MainContent />
            <Footer />
          </>
        )
      }
    </div >
  );
}


export default App;