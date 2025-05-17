import React, { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot, query, doc, getDoc} from 'firebase/firestore';
import { FaStar } from 'react-icons/fa';
import './MoviePage1.css';

function ReviewList({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [userNames, setUserNames] = useState({});
  const db = getFirestore();
  const [sortType, setSortType] = useState('date_desc');

  useEffect(() => {
    const reviewsRef = collection(db, 'movies', movieId, 'reviews');
    const q = query(reviewsRef,);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewsData = querySnapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));

      setReviews(reviewsData);
    }, (error) => {
      console.error('Ошибка при загрузке отзывов:', error);
    });

    return () => unsubscribe();
  }, [movieId]);

  const sortedReviews = [...reviews].sort((a, b) => {
    const aDate = a.createdAt?.seconds || 0;
    const bDate = b.createdAt?.seconds || 0;

    switch (sortType) {
      case 'date_asc':
        return aDate - bDate;
      case 'date_desc':
        return bDate - aDate;
      case 'rating_asc':
        return a.rating - b.rating;
      case 'rating_desc':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  if (reviews.length === 0) {
    return <p className="no-reviews">Отзывов пока нет.</p>;
  }

  return (
    <div className="review-list">
      <h3 className="review-title">Отзывы пользователей</h3>
      <div className="sort-controls">
  <label htmlFor="sort">Сортировать по:</label>
  <select
    id="sort"
    value={sortType}
    onChange={(e) => setSortType(e.target.value)}
  >
    <option value="date_desc">Дате (Снвчало новые)</option>
    <option value="date_asc">Дате (Сначало страые)</option>
    <option value="rating_desc">Оценке (Сначало высокие)</option>
    <option value="rating_asc">Оценке (Сначало низкие)</option>
  </select>
</div>
      {sortedReviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="review-header">
            <strong>{review.userName || 'Аноним'}</strong>
            <div className="review-rating">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} color="#ffc107" />
              ))}
            </div>
          </div>
           {review.createdAt?.toDate && (
    <div className="review-date">
      {review.createdAt.toDate().toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}
    </div>
  )}
          <p className="review-text">{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
