import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Payment.css';
import CookieConsent from "../CookieConsent/CookieConsent";

const Payment = () => {
    const [copiedField, setCopiedField] = useState(null);
    const [hoveredField, setHoveredField] = useState(null);

    const copyToClipboard = async (text, fieldName) => {
        try {
            await navigator.clipboard.writeText(text);

            setCopiedField(fieldName);

            setTimeout(() => {
                setCopiedField(null);
            }, 2000);

        } catch (err) {
            console.error('Ошибка копирования: ', err);
            // Fallback для старых браузеров
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            setCopiedField(fieldName);
            setTimeout(() => setCopiedField(null), 2000);
        }
    };

    const getNotificationText = (fieldName) => {
        switch (fieldName) {
            case 'account':
                return 'Номер счета скопирован!';
            case 'purpose':
                return 'Цель платежа скопирована!';
            case 'recipient':
                return 'Имя получателя скопировано!';
            default:
                return 'Текст скопирован!';
        }
    };

    return (
        <div className="payment-page-wrapper">
            <div className="payment-page">
                {/* Хлебные крошки */}
                <div className="payment-breadcrumbs">
                    <Link to="/" className="breadcrumb-link">Главная</Link>
                    <span className="breadcrumb-separator">›</span>
                    <Link to="/agreement" className="breadcrumb-link">Договор оферты</Link>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-current">Оплата</span>
                </div>

                {/* Банковский бланк */}
                <div className="bank-payment-form">
                    <div className="bank-header">
                        <h1 className="bank-title">Реквизиты оплаты</h1>
                    </div>

                    {/* Номер счета */}
                    <div
                        className={`bank-field ${copiedField === 'account' ? 'bank-field-copied' : ''}`}
                        onClick={() => copyToClipboard('54102039030000160201722685', 'account')}
                        onMouseEnter={() => setHoveredField('account')}
                        onMouseLeave={() => setHoveredField(null)}
                    >
                        <span className="field-name">Номер счета:</span>
                        <span className="field-data">54102039030000160201722685</span>
                        <div className="copy-icon-container">
                            <span className="copy-icon">📄</span>
                            {hoveredField === 'account' && (
                                <div className="copy-tooltip">Копировать</div>
                            )}
                        </div>
                    </div>

                    {/* Цель платежа */}
                    <div
                        className={`bank-field ${copiedField === 'purpose' ? 'bank-field-copied' : ''}`}
                        onClick={() => copyToClipboard('sesji coachingowych', 'purpose')}
                        onMouseEnter={() => setHoveredField('purpose')}
                        onMouseLeave={() => setHoveredField(null)}
                    >
                        <span className="field-name">Цель платежа:</span>
                        <span className="field-data">sesji coachingowych</span>
                        <div className="copy-icon-container">
                            <span className="copy-icon">📄</span>
                            {hoveredField === 'purpose' && (
                                <div className="copy-tooltip">Копировать</div>
                            )}
                        </div>
                    </div>

                    {/* Получатель */}
                    <div
                        className={`bank-field ${copiedField === 'recipient' ? 'bank-field-copied' : ''}`}
                        onClick={() => copyToClipboard('Antanina Sapeha', 'recipient')}
                        onMouseEnter={() => setHoveredField('recipient')}
                        onMouseLeave={() => setHoveredField(null)}
                    >
                        <span className="field-name">Получатель:</span>
                        <span className="field-data">Antanina Sapeha</span>
                        <div className="copy-icon-container">
                            <span className="copy-icon">📄</span>
                            {hoveredField === 'recipient' && (
                                <div className="copy-tooltip">Копировать</div>
                            )}
                        </div>
                    </div>

                    {/* Уведомление о копировании */}
                    {copiedField && (
                        <div className="copy-notification show">
                            ✅ {getNotificationText(copiedField)}
                        </div>
                    )}
                </div>

            </div>
            <CookieConsent />
        </div>
    );
};

export default Payment;