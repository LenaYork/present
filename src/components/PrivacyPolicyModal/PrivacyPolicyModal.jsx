import { useState } from 'react';
import './PrivacyPolicyModal.css';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const [isAgreed, setIsAgreed] = useState(false);

  // Блокируем скролл через класс
  if (isOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAgreeChange = () => {
    setIsAgreed(!isAgreed);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2 className="modal-title">Политика конфиденциальности</h2>
        
        <div className="modal-scrollable">
          <div className="policy-text">
            <p>Всем привет! Это стандартная политика конфиденциальности.</p>
            
            <h3>1. Сбор информации</h3>
            <p>Мы собираем информацию, которую вы предоставляете при записи на консультацию...</p>
            
            <h3>2. Использование информации</h3>
            <p>Ваши данные используются исключительно для организации психологических консультаций...</p>
            
            <h3>3. Конфиденциальность</h3>
            <p>Все сессии строго конфиденциальны. Мы не разглашаем информацию третьим лицам...</p>
            
            <h3>4. Хранение данных</h3>
            <p>Ваши данные хранятся в зашифрованном виде и защищены современными методами...</p>
            
            <h3>5. Ваши права</h3>
            <p>Вы имеете право запросить доступ к вашим данным, их изменение или удаление...</p>
          </div>
        </div>
        
        <div className="modal-actions">
          <label className="agree-checkbox">
            <input 
              type="checkbox" 
              checked={isAgreed}
              onChange={handleAgreeChange}
            />
            <span className="checkmark"></span>
            Я ознакомлен(а) с правилами и согласен(на) с ними
          </label>
          
          <button 
            className={`pay-button ${isAgreed ? 'active' : 'disabled'}`}
            disabled={!isAgreed}
          >
            Перейти к оплате
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;