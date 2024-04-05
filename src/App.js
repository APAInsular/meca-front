import React from 'react';
import Footer from './components/Footer';
//import ContactUs from './components/ContactUs';
//import RegisterPage from './components/RegisterPage';
import MonumentFiltradosPage from './pages/MonumentFiltradosPage'
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">\
    <NavBar/>
    <MonumentFiltradosPage/>
    <Footer/>
    </div>
  );
}


export default App;