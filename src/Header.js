import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Header() {
  return (
    <header className="Header">
      <div className="Links">
        <a href="#">Soporte Técnico</a>
        <a href="#">Bolsa de Trabajo</a>
        <a href="#">Mi Correo</a>
      </div>
      <div className="Location">
        <a href="https://maps.google.com/?q=Tuxtla Gutiérrez" className="LocationLink">
          <span className="LocationIcon">📍</span>
          <span>Tuxtla Gutiérrez</span>
        </a>
      </div>
      <div className="Social">
        <a href="#"><FaFacebook size={28} className="SocialIcon" /></a>
        <a href="#"><FaTwitter size={28} className="SocialIcon" /></a>
        <a href="#"><FaInstagram size={28} className="SocialIcon" /></a>
      </div>
      <div className="Phone">
        <span className="Sales">Ventas: 7577-363853</span>
      </div>
    </header>
  );
}

export default Header;
