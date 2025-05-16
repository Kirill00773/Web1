import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import './Catalog2.css'
import Header from '../Components/Header';

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
        id: 'movie2',
        title: 'Запретная зона',
        year: 2020,
        poster: 'Poster2.jpg'
    },
    {
        id: 'movie3',
        title: 'Иди и смотри',
        year: 1985,
        poster: 'Poster3.jpg'
    },

    {
        id: 'movie4',
        title: 'Атака мертвецов: Осовец',
        year: 2018,
        poster: 'Poster4.jpg'
    },

    {
        id: 'movie5',
        title: 'Брестская крепость',
        year: 2010,
        poster: 'Poster8.jpg'
    },

    {
        id: 'movie6',
        title: 'Добро пожаловать в семью',
        year: 2021,
        poster: 'Poster9.jpg'
    },

    {
        id: 'movie7',
        title: 'Время вернуться',
        year: 2024,
        poster: 'Poster10.jpg'
    },

    {
        id: 'movie5',
        title: 'Инсайт',
        year: 2009,
        poster: 'Poster12.jpg'
    },

  
  ];


  return (
    <div>
     <Header/>
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
