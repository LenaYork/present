import React, { useState } from 'react';
import './Certificates.css';

const Sertificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sertificates = Array.from({ length: 23 }, (_, i) =>
    `sertificates/sert${i + 1}.jpg`
  );

  // Для отладки - проверяем первый путь
  console.log('Первый сертификат:', sertificates[0]);
  console.log('Все сертификаты:', sertificates);

  const nextSlide = () => {
    setCurrentIndex(prev => prev === sertificates.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? sertificates.length - 1 : prev - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Проверяем загрузку изображений
  const handleImageError = (e) => {
    console.error('Ошибка загрузки изображения:', e.target.src);
    e.target.style.backgroundColor = '#f0f0f0';
    e.target.alt = 'Изображение не найдено';
  };

  const handleImageLoad = (e) => {
    console.log('Изображение загружено:', e.target.src);
  };

  return (
    <section className="sertificates" id="sertificates">
      <div className="sertificates__container">
        <h2 className="sertificates__title">Сертификаты</h2>

        <div className="sertificates__slider">
          <button className="sertificates__btn sertificates__btn--prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="sertificates__track">
            <div className="sertificates__slide" onClick={openModal}>
              <div className="sertificates__image-wrapper">
                <img
                  src={sertificates[currentIndex]}
                  alt={`Сертификат ${currentIndex + 1}`}
                  className="sertificates__thumb"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          </div>

          <button className="sertificates__btn sertificates__btn--next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="sertificates__counter">
          {currentIndex + 1} / {sertificates.length}
        </div>

      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>×</button>
            <img
              src={sertificates[currentIndex]}
              alt="Сертификат"
              className="modal__image"
              onError={handleImageError}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Sertificates;