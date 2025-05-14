import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import './Registr2.css';

function Registr3() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        setError(''); // сбрасываем старую ошибку

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                username: username
            });

            navigate('/login');
        } catch (err) {
            switch (err.code) {
                case 'auth/weak-password':
                    setError('Пароль должен содержать минимум 6 символов');
                    break;
                case 'auth/email-already-in-use':
                    setError('Этот email уже зарегистрирован');
                    break;
                case 'auth/invalid-email':
                    setError('Некорректный формат email');
                    break;
                default:
                    setError('Произошла ошибка: ' + err.message);
            }
        }
    };

    return (
        <div>
            <h1 className="Name">BelaRates</h1>
            <p className="P6">Регистрация</p>
            <p className="P7">Если вы уже в аккаунте</p>
            <button className="B3" onClick={() => navigate('/login')}>Войти!!!</button>

            <p className="P8">Email</p>
            <img className="IMG3" src="/img/pages2.svg" alt="Email"/>
            <input 
                type="email"
                className="SP1-input"
                placeholder="Введите адрес электронной почты"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="divider3"></div>

            <p className="P9">Username</p>
            <img className="IMG4" src="/img/Page4.svg" alt="Username"/>
            <input 
                type="text"
                className="SP2-input"
                placeholder="Введите имя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <div className="divider4"></div>

            <p className="P10">Password</p>
            <img className="IMG5" src="/img/Page3.svg" alt="Password"/>
            <input 
                type="password"
                className="SP3-input"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className="divider5"></div>

            <p className="P11">Confirm Password</p>
            <img className="IMG6" src="/img/Page3.svg" alt="Confirm Password"/>
            <input 
                type="password"
                className="SP4-input"
                placeholder="Повторно введите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="divider6"></div>

            {error && <p className="error-message">{error}</p>}

            <button className="B4" onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
}

export default Registr3;
