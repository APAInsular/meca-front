import './styles/App.css';
import React from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
