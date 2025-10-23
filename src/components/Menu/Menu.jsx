import React, { useState, useEffect, useRef } from 'react';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  // Функция для закрытия меню при клике на ссылку
  const handleMenuLinkClick = (e) => {
    // Если меню открыто (мобильная версия)
    if (isOpen) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');

      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(closeNav, 500);
    }
  };

  // Эффект для блокировки скролла
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  // Обработчик клика вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        // Проверяем, что клик не по бургеру
        const burger = document.querySelector('.burger');
        if (burger && !burger.contains(event.target)) {
          closeNav();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="menu-container">
      <div className="burger" onClick={openNav}>
        <div className={`line ${isOpen ? 'active' : ''}`}></div>
        <div className={`line ${isOpen ? 'active' : ''}`}></div>
        <div className={`line ${isOpen ? 'active' : ''}`}></div>
        <div className={`line ${isOpen ? 'active' : ''}`}></div>
      </div>

      {isOpen && <div className="menu-overlay"></div>}

      <nav ref={navRef} className={`nav ${isOpen ? 'open' : ''}`}>
        <p className="closeNavIcon" onClick={closeNav}>×</p>
        <ul className="menu">
          <li><a href="#about-me" onClick={handleMenuLinkClick}>Обо мне</a></li>
          <li><a href="#services" onClick={handleMenuLinkClick}>Услуги</a></li>
          <li><a href="#sertificates" onClick={handleMenuLinkClick}>Сертификаты</a></li>
          <li><a href="#contacts" onClick={handleMenuLinkClick}>Контакты</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;