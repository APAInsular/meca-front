import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App m-0 p-0">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}


export default App;