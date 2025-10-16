import React, { useState } from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Индивидуальная консультация",
            description: "Персональные сессии, направленные на решение ваших уникальных запросов и задач в комфортной обстановке",
            duration: "50-60 минут",
            price: "€80"
        },
        {
            title: "Групповая терапия",
            description: "Работа в небольшой группе для развития коммуникативных навыков и получения поддержки от участников",
            duration: "90 минут",
            price: "€40"
        }
    ];

    return (
        <div className="services">
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
                            <a href="tel:+136745677554" className="service-button">
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