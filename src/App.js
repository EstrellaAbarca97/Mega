import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaHome } from 'react-icons/fa';
import Carrusel from './Carrusel';
import './App.css';
function App() {
  const [showPackages, setShowPackages] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMegaMovil, setShowMegaMovil] = useState(false);

  return (
    <div className="Main">
      <header className="Header">
        <div className="SocialIcons">
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaInstagram size={24} />
        </div>
        <div className="ContactInfo">Phone: 123-456-7890</div>
      </header>
      <div className="GrayHeader">
        <FaHome size={24} />
        <img src="./img/mega.png" alt="Mega" />
        <div className="Links">
          <a href="#" onClick={() => setShowPackages(true)}>Paquetes</a>
          <a href="#" onClick={() => setShowServices(true)}>Servicios</a>
          <a href="#" onClick={() => setShowMegaMovil(true)}>Mega Móvil</a>
        </div>
      </div>
      {showPackages && (
        <div className="LandscapeContent">
          {/* Contenido de los paquetes */}
        </div>
      )}
      {showServices && (
        <div className="LandscapeContent">
          {/* Contenido de los servicios */}
        </div>
      )}
      {showMegaMovil && (
        <div className="LandscapeContent">
          {/* Contenido de Mega Móvil */}
        </div>
      )}
      <div className="CarruselSection">
        <Carrusel />
      </div>
    </div>
  );
}

export default App;
