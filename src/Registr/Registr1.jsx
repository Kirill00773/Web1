import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Registr2.css';

function Registr3() {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1 className="Name">BelaRates</h1>
            <p className="P6">Регистрация</p>
            <p className="P7">Если вы уже в аккаунте</p>
            <button className="B3" onClick={() => navigate('/login')}>Войти!!!</button>
            
            {/* Поле Email */}
            <p className="P8">Email</p>
            <img className="IMG3" src="/img/pages2.svg" alt="Email"/>
            <input 
                type="email"
                className="SP1-input"
                placeholder="Введите адрес электронной почты"
            />
            <div className="divider3"></div>
            
            {/* Поле Username */}
            <p className="P9">Username</p>
            <img className="IMG4" src="/img/Page4.svg" alt="Username"/>
            <input 
                type="text"
                className="SP2-input"
                placeholder="Введите имя"
            />
            <div className="divider4"></div>
            
            {/* Поле Password */}
            <p className="P10">Password</p>
            <img className="IMG5" src="/img/Page3.svg" alt="Password"/>
            <input 
                type="password"
                className="SP3-input"
                placeholder="Введите пароль"
            />
            <div className="divider5"></div>
            
            {/* Поле Confirm Password */}
            <p className="P11">Confirm Password</p>
            <img className="IMG6" src="/img/Page3.svg" alt="Confirm Password"/>
            <input 
                type="password"
                className="SP4-input"
                placeholder="Повторно введите пароль"
            />
            <div className="divider6"></div>
            
            <button className="B4" onClick={() => navigate('/home')}>Зарегистрироваться</button>
        </div>
    );
}

export default Registr3;