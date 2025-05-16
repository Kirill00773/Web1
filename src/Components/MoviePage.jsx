import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { FaRegClock, FaStar, FaFilm, FaUser } from 'react-icons/fa';
import ReviewForm from './ReviewForm';
import './MoviePage1.css'
import ReviewList from './Reviewlist';
import MovieRating from './MovieRating';


function MoviePage() {
const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const db = getFirestore();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const docRef = doc(db, 'movies', movieId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMovie(docSnap.data());
        } else {
          console.log('Фильм не найден');
        }
      } catch (error) {
        console.error('Ошибка при загрузке фильма:', error);
      }
    };

    fetchMovie();
  }, [movieId, db]);

  if (!movie) return <p>Загрузка фильма...</p>;

  return (
    <div className="movie-page">
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
      <div className="movie-header">
        <img
          src={`/posters/${movie.poster}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-details">
  <h2 className="tit">{movie.title}</h2> 
  <h2 className="yea">({movie.year})</h2>
  
  <p className="resis">
    <FaUser style={{ marginRight: '6px' }} />
    <strong>Режиссёр:</strong> {movie.director}
  </p>

  <p className="dlitel">
    <FaRegClock style={{ marginRight: '6px' }} />
    <strong>Длительность:</strong> {movie.duration} мин
  </p>

  <p className="jajr">
    <FaFilm style={{ marginRight: '7px' }} />
    <strong>Жанры:</strong> {movie.genres?.join(', ')}
  </p>

  <MovieRating movieId={movieId} />
</div>
      </div>

      <div className="tab-buttons">
        <button onClick={() => setActiveTab('description')} className={activeTab === 'description' ? 'active' : ''}>
          Описание
        </button>
        <button onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? 'active' : ''}>
          Отзывы
        </button>
      </div>

     
      <div className="tab-content">
  {activeTab === 'description' ? (
    <p className="description-text"><strong>Описание:</strong> {movie.description || 'Описание пока недоступно.'}</p>
  ) : (
    <div className="review-section">
      <ReviewForm movieId={movieId} />
      <ReviewList movieId={movieId} />
    </div>
  )}
</div>
    </div>
  );
}

export default MoviePage;
