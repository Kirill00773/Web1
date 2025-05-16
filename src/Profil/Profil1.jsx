import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { MdEmail } from 'react-icons/md';
import './Profil2.css'

function Prof(){
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  const [username, setUsername] = useState('');
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        setEmail(user.email);
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUsername(userSnap.data().username);
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleSave = async () => {
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { username });
      setEditing(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return(
    <div>
      <header className="bac">
                <div className="bac-content">
            <h1 className="Name1">BelaRates</h1>
            <div className="search-wrapper">
                        <input 
                            type="text" 
                            className="oval"
                            placeholder="  Поиск..." 
                        />
                    </div>
            <button className="new">Новости</button>
            <button className="abt">О нас</button>
            <button className="cat" onClick={() => navigate('/catalog')}>Каталог</button>
            <div onClick={() => navigate('/profil')} style={{ cursor: 'pointer' }}>
                <img className="IMG7" src="/img/Page5.svg" alt="Кнопка" />
            </div>
            </div>
            </header>

            <div className="profile-container">
        <div className="avatar-circle">
          {username.charAt(0).toUpperCase()}
        </div>
        {editing ? (
  <div className="profile-edit-card">
    <label className="edit-label">Введите новое имя пользователя:</label>
    <textarea
      className="edit-textarea"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Введите новое имя..."
      rows="2"
    />
  </div>
) : (
  <>
    <h2 className="Nn">{username}</h2>
    <div className="email-display">
      <p className="vash-email">Ваш Email</p>
  <MdEmail className="email-icon" />
  {email}
</div>

  </>
)}


        <div className="profile-buttons">
          <button onClick={() => setEditing(!editing)}>
            {editing ? 'Отмена' : 'Редактировать'}
          </button>
          {editing && <button onClick={handleSave}>Сохранить</button>}
          <button onClick={handleLogout}>Выйти</button>
        </div>
      </div>
    </div>
  )
}

export default Prof;