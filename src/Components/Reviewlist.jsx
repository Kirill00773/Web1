import React, { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot, query, orderBy, doc, getDoc} from 'firebase/firestore';
import { FaStar } from 'react-icons/fa';
import './MoviePage1.css';

function ReviewList({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [userNames, setUserNames] = useState({});
  const db = getFirestore();

  useEffect(() => {
    const reviewsRef = collection(db, 'movies', movieId, 'reviews');
    const q = query(reviewsRef, orderBy('createdAt', 'desc'));

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

  if (reviews.length === 0) {
    return <p className="no-reviews">Отзывов пока нет.</p>;
  }

  return (
    <div className="review-list">
      <h3 className="review-title">Отзывы пользователей</h3>
      {reviews.map((review) => (
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
