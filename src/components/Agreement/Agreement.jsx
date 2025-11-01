import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Agreement.css';
import { agreementContent } from '../../data/agreementContent';
import CookieConsent from "../CookieConsent/CookieConsent";

const Agreement = () => {
    const [isAgreed, setIsAgreed] = useState(false);
    const [activeTab, setActiveTab] = useState('polish');

    const handleCheckboxChange = (e) => {
        setIsAgreed(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isAgreed) {
            window.location.href = '/payment';
        }
    };

    return (
        <div className="agreement">
            <div className="agreement-container">
                <Link to="/" className="back-link">
                    <span className="back-arrow">←</span>
                    Вернуться на главную
                </Link>

                <h1 className="agreement-title">Регламент коучинг-сессии</h1>

                {/* Десктопная версия - Grid */}
                <div className="agreement-desktop">
                    <div className="agreement-grid">
                        <div className="grid-header polish-header">Umowa (PL)</div>
                        <div className="grid-header russian-header">Договор (RU)</div>

                        {agreementContent.map((item, index) => {
                            if (item.type === 'heading') {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={`grid-item polish-item ${item.type}`}>
                                            <h2 dangerouslySetInnerHTML={{ __html: item.content[0] }} />
                                        </div>
                                        <div className={`grid-item russian-item ${item.type}`}>
                                            <h2 dangerouslySetInnerHTML={{ __html: item.content[1] }} />
                                        </div>
                                    </React.Fragment>
                                );
                            } else if (item.type === 'subheading') {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={`grid-item polish-item ${item.type}`}>
                                            <h3 dangerouslySetInnerHTML={{ __html: item.content[0] }} />
                                        </div>
                                        <div className={`grid-item russian-item ${item.type}`}>
                                            <h3 dangerouslySetInnerHTML={{ __html: item.content[1] }} />
                                        </div>
                                    </React.Fragment>
                                );
                            } else if (item.type === 'list') {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={`grid-item polish-item ${item.type}`}>
                                            <ul>
                                                <li dangerouslySetInnerHTML={{ __html: item.content[0] }} />
                                            </ul>
                                        </div>
                                        <div className={`grid-item russian-item ${item.type}`}>
                                            <ul>
                                                <li dangerouslySetInnerHTML={{ __html: item.content[1] }} />
                                            </ul>
                                        </div>
                                    </React.Fragment>
                                );
                            } else if (item.type === 'numbered-list') {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={`grid-item polish-item ${item.type}`}>
                                            <ol>
                                                <li dangerouslySetInnerHTML={{ __html: item.content[0] }} />
                                            </ol>
                                        </div>
                                        <div className={`grid-item russian-item ${item.type}`}>
                                            <ol>
                                                <li dangerouslySetInnerHTML={{ __html: item.content[1] }} />
                                            </ol>
                                        </div>
                                    </React.Fragment>
                                );
                            } else {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={`grid-item polish-item ${item.type}`}>
                                            <p dangerouslySetInnerHTML={{ __html: item.content[0] }} />
                                        </div>
                                        <div className={`grid-item russian-item ${item.type}`}>
                                            <p dangerouslySetInnerHTML={{ __html: item.content[1] }} />
                                        </div>
                                    </React.Fragment>
                                );
                            }
                        })}
                    </div>
                </div>

                {/* Мобильная версия - вкладки */}
                <div className="agreement-mobile">
                    <div className="agreement-tabs">
                        <button
                            className={`tab-button ${activeTab === 'polish' ? 'active' : ''}`}
                            onClick={() => setActiveTab('polish')}
                        >
                            Polski
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'russian' ? 'active' : ''}`}
                            onClick={() => setActiveTab('russian')}
                        >
                            Русский
                        </button>
                    </div>

                    <div className={`tab-content ${activeTab === 'polish' ? 'active' : ''}`}>
                        <h2 className="column-title">Umowa</h2>
                        <div className="agreement-text">
                            {agreementContent.map((item, index) => (
                                <div key={index}>
                                    {item.type === 'heading' ? (
                                        <h3 dangerouslySetInnerHTML={{ __html: item.content[0] }} />
                                    ) : (
                                        <p dangerouslySetInnerHTML={{ __html: item.content[0] }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`tab-content ${activeTab === 'russian' ? 'active' : ''}`}>
                        <h2 className="column-title">Договор</h2>
                        <div className="agreement-text">
                            {agreementContent.map((item, index) => (
                                <div key={index}>
                                    {item.type === 'heading' ? (
                                        <h3 dangerouslySetInnerHTML={{ __html: item.content[1] }} />
                                    ) : (
                                        <p dangerouslySetInnerHTML={{ __html: item.content[1] }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <form className="agreement-form" onSubmit={handleSubmit}>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={isAgreed}
                            onChange={handleCheckboxChange}
                            className="checkbox-input"
                        />
                        <span className={`checkmark${isAgreed ? ' checked' : ''}`}></span>
                        Я ознакомлен(а) с регламентом и согласен(на)
                    </label>

                    <button
                        type="submit"
                        className={`payment-btn ${isAgreed ? 'payment-btn--active' : 'payment-btn--disabled'}`}
                        disabled={!isAgreed}
                    >
                        Перейти к оплате
                    </button>
                </form>
            </div>
            <CookieConsent />
        </div>
    );
};

export default Agreement;