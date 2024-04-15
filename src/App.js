import React from 'react';
import NavBar from './components/NavBar';
//import MainContent from './components/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoPage from './pages/InfoPage'
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  const isMobile = window.innerWidth <= 425;
  return (
    <div className="App m-0 p-0">
      <MainContent />
    </div>
  );
}


export default App;