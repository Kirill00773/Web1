import React, { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { FaStar } from 'react-icons/fa';

function MovieRating({ movieId }) {
  const [average, setAverage] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const db = getFirestore();
    const reviewsRef = collection(db, 'movies', movieId, 'reviews');

    const unsubscribe = onSnapshot(reviewsRef, (snapshot) => {
      const ratings = snapshot.docs.map(doc => doc.data().rating);
      const total = ratings.reduce((sum, r) => sum + r, 0);
      const avg = ratings.length > 0 ? total / ratings.length : 0;
      setAverage(avg.toFixed(1));
      setCount(ratings.length);
    });

    return () => unsubscribe();
  }, [movieId]);

  return (
    <p className="reit">
      <FaStar style={{ marginRight: '6px', color: '#ffc107' }} />
      <strong>Рейтинг:</strong> {average} (на основе {count} оценок)
    </p>
  );
}

export default MovieRating;
