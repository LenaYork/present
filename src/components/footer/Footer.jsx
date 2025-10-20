import React, { useState } from 'react';
import './Footer.css';
import PrivacyPolicyModal from '../PrivacyPolicyModal/PrivacyPolicyModal';

import logoIcon from '../../assets/logo.svg';
import mapIcon from '../../assets/map.svg';
import phoneIcon from '../../assets/phone.svg';
import telegramIcon from '../../assets/telegram.svg';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-wrapper">

        <div className="footer-pic logo">
          <img src={logoIcon} alt="psychologist" />
        </div>

        <div className="footer-docs">
          <h3>Полезная информация</h3>
          <p onClick={() => setIsModalOpen(true)}>Политика конфиденциальности</p>
        </div>

        <div className="footer-contacts">
          <h3 className="footer-title">Контакты:</h3>

          <div className="phone">
            <a href="tel:+48884653971" className="footer-link">
              <img src={phoneIcon} alt="phone" className="footer-item" />
              +48 884 653 971
            </a>
          </div>

          <div className="mail">
            <a href="antaninasapego@gmail.com" className="footer-link">
              <img src={mapIcon} alt="email" className="footer-item" />
              antaninasapego@gmail.com
            </a>
          </div>

          <div className="telegram">
            <a href="https://t.me/antonina_sapego_psiholog" className="footer-link">
              <img src={telegramIcon} alt="telegram" className="footer-item" />
              antonina_sapego_psiholog
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

      <PrivacyPolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </footer >
  )
}

export default Footer;