import React, { useState } from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Индивидуальная сессия",
            description: "Персональные сессии, направленные на решение ваших уникальных запросов и задач в комфортной обстановке",
            duration: "55 минут",
            price: "180 PLN"
        },
        {
            title: "Семейная сессия",
            description: "Профессиональное сопровождение в решении текущих вопросов и выстраивании эффективной коммуникации между членами семьи",
            duration: "90 минут",
            price: "250 PLN"
        }
    ];

    return (
        <div className="services" id="services">
            <div className="services-wrapper">
                <h2 className="services-title">Услуги</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-details">
                                <span className="duration">⏱ {service.duration}</span>
                                <span className="price">💶 {service.price}</span>
                            </div>
                            <a href="https://t.me/antonina_sapego_psiholog?text=Добрый день! Хочу записаться на консультацию."
                                className="service-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                Записаться
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;