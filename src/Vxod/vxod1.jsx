import React from 'react';
import { useNavigate } from 'react-router-dom';
import './vxod2.css';

function Vxod3() {
    const navigate = useNavigate();
    const handleStartClick1 = () => {
    navigate('/register'); 
  };
    return(
        <div>
            <h1 className="Name">BelaRates</h1>
            <p className="P1">Вход</p>
            <p className="P2">Если у вас нету аккаунта</p>
            <button className="B1" onClick={handleStartClick1}>Зарегестрироваться!!!</button>
            
            {/* Поле Email */}
            <p className="P4">Email</p>
            <div className="input-wrapper">
                <img className="IMG1" src="/img/pages2.svg" alt="Email"/>
                <input 
                    type="email" 
                    className="email-input" 
                    placeholder="Введите ваш Email"
                />
            </div>
            <div className="divider1"></div>
            
            {/* Поле Password */}
            <p className="P5">Password</p>
            <div className="input-wrapper">
                <img className="IMG2" src="/img/page3.svg" alt="Password"/>
                <input 
                    type="password" 
                    className="password-input" 
                    placeholder="Введите ваш пароль"
                />
            </div>
            <div className="divider2"></div>
            
            <button className="B2">Войти</button>
        </div>
    )
}

export default Vxod3;