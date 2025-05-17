import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './First1.css';

const images = [
  "/img/pages1.svg",
  "/img/Pages8.svg",
];


function FirstPage(){
     const navigate = useNavigate(); 
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

     useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // меняется каждые 3 секунды
     return () => clearInterval(interval);
  }, []);

    const handleStartClick = () => {
    navigate('/login'); 
  };
    return(
        <div>
          <img className="logot" src= "./img/Pages10.svg"/>
            <h1 className="Name">BelaRates</h1>
            <img
                key={currentImageIndex}  
                className="Image1"
                src={images[currentImageIndex]}
                alt="Слайд"
/>
             <div className="Dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`Dot ${index === currentImageIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
            <p1 className="Text1">Добро пожаловать на сайт, где собраны честные отзывы, рецензии и мнения о белорусском кино! Здесь вы найдете разборы как классических картин, так и новинок белорусского кинематографа</p1>
            <button className="Button1" onClick={handleStartClick}>Начать</button>
        </div>
    )
}

export default FirstPage;