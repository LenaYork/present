import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  }


  return (
    <div className="menu-container">
      <div className="burger" onClick={openNav}>
        <div className={`line ${isOpen ? 'active' : ''}`}></div>
        <div className={`line ${isOpen ? 'active' : ''}`}></div>
        <div className={`line ${isOpen ? 'active' : ''}`}></div>
        <div className={`line ${isOpen ? 'active' : ''}`}></div>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <p className="closeNavIcon" onClick={closeNav}>x</p>
        <ul>
          <li href="#about-me">Обо мне</li>
          <li href="#services">Услуги</li>
          <li href="#sertificates">Сертификаты</li>
          <li href="contacts">Контакты</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;