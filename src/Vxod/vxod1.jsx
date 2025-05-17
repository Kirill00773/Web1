import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './vxod2.css';

function Vxod3() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (err) {
            switch (err.code) {
                case 'auth/invalid-email':
                    setError('Некорректный формат email');
                    break;
                case 'auth/user-not-found':
                    setError('Пользователь не найден');
                    break;
                case 'auth/wrong-password':
                    setError('Неверный пароль');
                    break;
                case 'auth/invalid-credential':
                    setError('Неверный логин или пароль');
                    break;
                default:
                    setError('Ошибка: ' + err.message);
            }
        }
    };

    return (
        <div>
            <img className="logot" src= "./img/Pages10.svg"/>
            <h1 className="Name">BelaRates</h1>
            <p className="P1">Вход</p>
            <p className="P2">Если у вас нет аккаунта</p>
            <button className="B1" onClick={() => navigate('/register')}>Зарегистрироваться!!!</button>
            
            <p className="P4">Email</p>
            <div className="input-wrapper">
                <img className="IMG1" src="/img/pages2.svg" alt="Email"/>
                <input 
                    type="email" 
                    className="email-input" 
                    placeholder="Введите ваш Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="divider1"></div>
            
            <p className="P5">Password</p>
            <div className="input-wrapper">
                <img className="IMG2" src="/img/page3.svg" alt="Password"/>
                <input 
                    type="password" 
                    className="password-input" 
                    placeholder="Введите ваш пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="divider2"></div>

            {error && <p className="error-message1">{error}</p>}

            <button className="B2" onClick={handleLogin}>Войти</button>
        </div>
    );
}

export default Vxod3;
