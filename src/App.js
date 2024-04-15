import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPage from './pages/ContactUsPage'
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App m-0 p-0">
      <NavBar />
      <ContactUsPage />
      <Footer />
    </div>
  );
}


export default App;