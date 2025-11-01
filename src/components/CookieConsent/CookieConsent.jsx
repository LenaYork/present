// components/CookieConsent.jsx
import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, давал ли пользователь уже согласие
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setShowBanner(true);
      // Блокируем прокрутку и взаимодействие
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAccept = () => {
    // Сохраняем согласие в localStorage
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    // Восстанавливаем прокрутку и взаимодействие
    document.body.style.overflow = 'auto';
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner">
        <div className="cookie-content">
          <h3>🍪 Использование файлов cookie</h3>
          <p>
            В соответствии с Регламентом ЕС 2016/679 (GDPR) мы обязаны получить 
            ваше согласие на использование файлов cookie. Мы используем только 
            необходимые cookie для работы сайта.
          </p>
        </div>
        <button className="cookie-accept-btn" onClick={handleAccept}>
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;