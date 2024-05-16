import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ProfilePage from './pages/ProfilePage';
import { useNavigate, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import RegisterLoginPage from './pages/RegisterLoginPage';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/es/MeCa");
    }
  }, [window.location.pathname]); // Cambiado aquí

  return (
    <div className="App m-0 p-0">
      {
        window.location.pathname.split("/")[2] === "perfil" ? (
          <Routes>
            <Route element={<ProfilePage />} path={`/:idioma/${window.location.pathname.split("/")[2]}`}></Route>
          </Routes>
        ) : window.location.pathname.split("/")[1] === "registro" || window.location.pathname.split("/")[1] === "login" ? (
          <Routes>
            <Route element={<RegisterLoginPage />} path={`/${window.location.pathname.split("/")[1]}`}></Route>
          </Routes>
        ) : (
          <>
            <NavBar />
            <MainContent />
            <Footer />
          </>
        )
      }
    </div>
  );
}

export default App;
