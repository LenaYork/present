import React, { useState } from 'react';
import './About.css';

import Photo from '../../assets/ava.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="about-wrapper">
                <img src={Photo} alt="Психолог Имя Фамилия" />
                <div className="about-content">
                    <h2>Психолог, психотерапевт</h2>
                    <p className="tagline">Профессиональный психолог, помогаю справиться с...</p>

                    <div className="facts">
                        <div className="fact-item">🎓 Высшее психологическое образование</div>
                        <div className="fact-item">⏱ Опыт работы: X лет</div>
                        <div className="fact-item">📚 Сертифицированный специалист по...</div>
                    </div>

                    <p className="description">
                        В своей работе я создаю безопасное пространство, где вы можете...
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;