import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc, collection, getDocs } from 'firebase/firestore';
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
  const [userReviews, setUserReviews] = useState([]);
  const [movieTitles, setMovieTitles] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        setEmail(user.email);
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUsername(userSnap.data().username);
        }
         fetchUserReviews();
      }
    };
    fetchUserData();
  }, [user]);

  const fetchUserReviews = async () => {
  if (user) {
    const db = getFirestore();
    const reviews = [];
    const titles = {};

    
    const movieIds = ['movie1', 'movie2']; 

    for (const movieId of movieIds) {

      const movieDoc = await getDoc(doc(db, 'movies', movieId));
      if (movieDoc.exists()) {
        titles[movieId] = movieDoc.data().title;
      }

      const reviewsSnapshot = await getDocs(collection(db, 'movies', movieId, 'reviews'));
      reviewsSnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.userId === user.uid) {
          reviews.push({ ...data, id: doc.id, movieId });
        }
      });
    }
    setMovieTitles(titles);
    setUserReviews(reviews);
  }
};

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
            <div className="profile-reviews-wrapper">
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
    <h2 className="user-name">{username}</h2>
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

      <div className="user-reviews-section">
  <h2 className="reviews-title">Ваши отзывы</h2>
  {userReviews.length === 0 ? (
    <p className="no-reviews">Вы ещё не оставляли отзывов.</p>
  ) : (
    <div className="user-reviews-grid">
      {userReviews.map((review) => (
        <div key={review.id} className="user-review-card">
          <div className="review-rating">
            {[...Array(review.rating)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className="review-text">"{review.text}"</p>
          <small className="review-movie-id">Фильм: {movieTitles[review.movieId] || review.movieId}</small>
        </div>
      ))}
    </div>
  )}
</div>

    </div>
    </div>
  )
}

export default Prof;