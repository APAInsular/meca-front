import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar.jsx';
import Author from './components/Author.jsx';
import Obrasdest from './components/Obras_destacadas.jsx';
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
    <NavBar/>
    <Author/>
    <Obrasdest/>
    <Footer />
    </>
  );
}

export default App;
