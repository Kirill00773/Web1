import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home2.css'
import Header from '../Components/Header';

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
            <Header/>
            <h className= "t1">Белорусское кино — честные отзывы и скрытые жемчужины! </h>
            <h className="t2">Всегда хотели узнать, какие белорусские фильмы действительно стоит  посмотреть? Искали объективные мнения без навязчивой рекламы? А может,  хотели обсудить любимую кинокартину с такими же ценителями?</h>
            <button className="st" onClick={() => navigate('/catalog')} >Посмотреть каталог фильмов</button>

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