// App.js

import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from './logo.svg';
import Carrusel from './Carrusel'; 
import './App.css';
import ubiIcon from './img/ubi.png'; // Importa el icono de ubicación

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="Main">
      <header className="Header">
        <div className="Links">
          <a href="#" className="Link">Soporte técnico</a>
          <span className="Separator"> | </span>
          <a href="#" className="Link">Bolsa de trabajo</a>
          <span className="Separator"> | </span>
          <a href="#" className="Link">Mi correo</a>
        </div>
        <div className="Location">
          <img src={ubiIcon} alt="Ubicación" className="LocationIcon" />
          <a href="#" className="Link">Tuxtla Gutiérrez</a>
        </div>
        <div className="Social">
          <a href="#"><FaFacebook className="SocialIcon" /></a>
          <a href="#"><FaTwitter className="SocialIcon" /></a>
          <a href="#"><FaInstagram className="SocialIcon" /></a>
        </div>
        <div className="Phone">
          <span className="PhoneText">Ventas: 7577-363853</span>
        </div>
      </header>
      <div className="Bar">
        <div className="Logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="Menu">
          <button>Home</button>
          <button onClick={handleLoginClick}>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
      </div>
      {showLogin && (
        <div className="LoginSection">
          {/* Contenido del inicio de sesión */}
        </div>
      )}
      <div className="CarruselSection">
        <Carrusel />
      </div>
      <div className="OptionsBar">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </div>
    </div>
  );
}

export default App;


