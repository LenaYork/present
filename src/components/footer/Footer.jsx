import React, { useState } from 'react';
import './Footer.css';

import logoIcon from '../../assets/logo.svg';
import mapIcon from '../../assets/map.svg';
import phoneIcon from '../../assets/phone.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">

        <div className="footer-pic logo">
          <img src={logoIcon} alt="psychologist" />
        </div>

        <div className="footer-docs">
          <h3>Полезная информация</h3>
          <p>Политика конфиденциальности</p>
        </div>

        <div className="footer-contacts">
          <h3 className="footer-title">Контакты:</h3>
          <div className="mail">
            <a href="mailto:psychologist@example.com" className="footer-link">
              <img src={mapIcon} alt="email" className="footer-item" />
              psychologist@example.com
            </a>
          </div>
          <div className="phone">
            <a href="tel:+136745677554" className="footer-link">
              <img src={phoneIcon} alt="phone" className="footer-item" />
              +13 674 567 75 54
            </a>
          </div>
        </div>

        {/* <div className="footer-social">
        <div class="social-icon whatsapp-icon"></div>
        <div class="social-icon viber-icon"></div>
        <div class="social-icon youtube-icon"></div>
        <div class="social-icon fb-icon"></div>
        <div class="social-icon insta-icon"></div>
        <div class="social-icon tiktok-icon"></div>
      </div> */}
      </div>

    </footer >
  )
}

export default Footer;