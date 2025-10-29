import React from "react";
import { Link } from "react-router-dom";
import './Conditions.css';

const Conditions = () => {
    return (
        <div className="conditions">
            <h2 className="conditions-title">Условия сотрудничества и оплата</h2>
            <Link to="/agreement" className="conditions-agreement-btn">
                <span className="conditions-btn-text">Посмотреть регламент и перейти к оплате</span>
                <span className="conditions-btn-icon">📄</span>
            </Link>
        </div>
    )
}

export default Conditions;