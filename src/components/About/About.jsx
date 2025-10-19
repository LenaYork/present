import React, { useState } from 'react';
import './About.css';

import Photo from '../../assets/ava.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="about-wrapper">
                <img src={Photo} alt="Коуч Имя Фамилия" />
                <div className="about-content">
                    <h2>Антонина Сапего</h2>
                    <p className="tagline">Профессиональный коуч по личностному развитию и отношениям</p>

                    <div className="facts">
                        <div className="fact-item">🎓 Специалист с высшим психологическим образованием</div>
                        <div className="fact-item">⏱ Более X лет помогаю людям в решении жизненных задач</div>
                        <div className="fact-item">📚 Сертифицированный коуч международного уровня</div>
                        <div className="fact-item">💞 Специализация: гармонизация отношений и семейного благополучия</div>
                    </div>

                    <p className="description">
                        Я помогаю клиентам раскрыть внутренний потенциал, найти ясность в сложных ситуациях
                        и создать гармоничные отношения с собой и окружающими. Вместе мы выработаем
                        эффективные стратегии для достижения ваших целей и преодоления жизненных вызовов.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;