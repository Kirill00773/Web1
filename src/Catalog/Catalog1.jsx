import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import './Catalog2.css'

function Catal() {
  const navigate = useNavigate();

  const movies = [
    {
      id: 'movie1',
      title: 'Небесная команда',
      year: 2021,
      poster: 'Poster1.jpg', 
    },
    {
        id: 'movies2',
        title: 'Запретная зона',
        year: 2020,
        poster: 'Poster2.jpg'
    },
    {
        id: 'movies3',
        title: 'Иди и смотри',
        year: 1985,
        poster: 'Poster3.jpg'
    },

    {
        id: 'movies3',
        title: 'Атака мертвецов: Осовец',
        year: 2018,
        poster: 'Poster4.jpg'
    }
    
  ];

  return (
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
<p className="test1">Каталог фильмов</p>
<div className="movie-list">
  {movies.map((movie) => (
    <MovieCard key={movie.id} {...movie} />
  ))}
</div>
    </div>
  );
}

export default Catal;
