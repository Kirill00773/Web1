import React from 'react';
import { useNavigate } from 'react-router-dom';
import './First1.css';


function FirstPage(){
     const navigate = useNavigate(); 

    const handleStartClick = () => {
    navigate('/login'); 
  };
    return(
        <div>
            <h1 className="Name">BelaRates</h1>
            <img className="Image1" src="/img/pages1.svg"/>
            <p1 className="Text1">Добро пожаловать на сайт, где собраны честные отзывы, рецензии и мнения о белорусском кино! Здесь вы найдете разборы как классических картин, так и новинок белорусского кинематографа</p1>
            <button className="Button1" onClick={handleStartClick}>Начать</button>
        </div>
    )
}

export default FirstPage;