import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Prof(){
const navigate = useNavigate();
const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Вы вышли из аккаунта");
            navigate('/'); 
        } catch (error) {
            console.error("Ошибка выхода:", error);
        }
    };
 return(
    <div>
           <h1>ПОследний тест</h1>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    );
}

export default Prof;