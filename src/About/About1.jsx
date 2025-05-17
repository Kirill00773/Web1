import React from "react";
import { FaPalette, FaLightbulb, FaRegStar } from 'react-icons/fa';
import './About2.css';
import Header from "../Components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <img className="IMG14" src="./img/Pages10.svg" alt="Логотип" />

        <h1 className="ab-proj">О проекте BelRates</h1>

        <p className="ops">
          BelRates — это платформа для любителей кино, где каждый может найти информацию о фильмах, оценить их и поделиться своим мнением с сообществом киноманов.
        </p>

        <p className="ops">
          Наша миссия — помочь зрителям ориентироваться в мире кино, находить качественные фильмы и открывать для себя новых режиссеров и актеров.
        </p>

        <div className="card-about">
          <strong className="stroke-all">
            Мы создаем пространство для честного диалога о белорусском кинематографе:
          </strong>

          <div className="stroke-one">
            <FaPalette style={{ marginRight: '10px' }} />
            <span>Анализируем — от классики «Белорусьфильма» до современных экспериментов</span>
          </div>

          <div className="stroke-two">
            <FaLightbulb style={{ marginRight: '10px' }} />
            <span>Объединяем — ценителей, критиков и создателей кино</span>
          </div>

          <div className="stroke-three">
            <FaRegStar style={{ marginRight: '10px' }} />
            <span>Популяризируем — малоизвестные фильмы, которые стоит увидеть</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
