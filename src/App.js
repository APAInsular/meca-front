import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  //const { pathname } = useLocation();
  return (
    <div className="App m-0 p-0">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}


export default App;