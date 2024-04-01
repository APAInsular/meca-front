import React from 'react';
import myImage from './Photos/MECA-11.png';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <img src={myImage} alt="Footer" />
    </footer>
  );
};

export default Footer;