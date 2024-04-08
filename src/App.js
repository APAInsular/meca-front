import React from 'react';
//import ContactUs from './components/ContactUs';
//import RegisterPage from './components/RegisterPage';
//import MonumentFiltradosPage from './pages/MonumentFiltradosPage.jsx'
import NavBar from './components/NavBar';
//import MainContent from './components/MainContent';
import InfoPage from './pages/InfoPage'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (

    <div className="App m-0 p-0">
      <NavBar />
      <InfoPage />
      <Footer />
    </div>
  );
}


export default App;