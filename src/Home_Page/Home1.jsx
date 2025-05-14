import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home2.css'

const images = [
  '/img/Pages8.svg',
  '/img/pages1.svg',
];

function Home(){
 const navigate = useNavigate();
 const [currentImageIndex, setCurrentImageIndex] = useState(0);
 useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // смена каждые 3 секунды

    return () => clearInterval(timer);
  }, []);
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
            <button className="cat">Каталог</button>
            <div onClick={() => navigate('/profil')} style={{ cursor: 'pointer' }}>
                <img className="IMG7" src="/img/Page5.svg" alt="Кнопка" />
            </div>
            </div>
            </header>
            <h className= "t1">Белорусское кино — честные отзывы и скрытые жемчужины! </h>
            <h className="t2">Всегда хотели узнать, какие белорусские фильмы действительно стоит  посмотреть? Искали объективные мнения без навязчивой рекламы? А может,  хотели обсудить любимую кинокартину с такими же ценителями?</h>
            <button className="st">Посмотреть каталог фильмов</button>

            <img
                key={currentImageIndex}  
                className="IMG8"
                src={images[currentImageIndex]}
                alt="Слайд"
/>
             <div className="Dots1">
          {images.map((_, index) => (
            <span
              key={index}
              className={`Dot ${index === currentImageIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
        </div>

    )
}

export default Home;