import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
<<<<<<< HEAD
=======
import { useLocation } from 'react-router-dom';
>>>>>>> 10b8798eca90041687b7d66bdd15706683e1d86a

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App m-0 p-0">
      <NavBar />
<<<<<<< HEAD
=======
      {/* {pathname === "/perfil" ? null : <NavBar/>} */}
>>>>>>> 10b8798eca90041687b7d66bdd15706683e1d86a
      <MainContent />
      <Footer />
    </div>
  );
}


export default App;