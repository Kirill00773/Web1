// src/components/Header.jsx
import React  from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();


  return (
    <header className="bac">
      <div className="bac-content">
        <button className="Name1" onClick={() => navigate('/home')}>BelaRates</button>
        
        <div className="search-wrapper">
        </div>

        <button className="new">Новости</button>
        <button className="abt" onClick={() => navigate('/about')}>О нас</button>
        <button className="cat" onClick={() => navigate('/catalog')}>Каталог</button>

        <div onClick={() => navigate('/profil')} style={{ cursor: 'pointer' }}>
          <img className="IMG7" src="/img/Page5.svg" alt="Кнопка" />
        </div>
      </div>
    </header>
  );
}

export default Header;
