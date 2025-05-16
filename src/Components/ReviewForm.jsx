import React, { useState } from 'react';
import { getFirestore, collection, addDoc, doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './ReviewForm1.css'; 

function ReviewForm({ movieId }) {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const db = getFirestore();
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    

    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userDocRef);
      const userName = userSnap.exists() ? userSnap.data().username : 'Аноним';

      await addDoc(collection(db, `movies/${movieId}/reviews`), {
        userId: user.uid,
        userName: userName,
        rating: rating,
        text: text,
        createdAt: serverTimestamp(),
      });

      setText('');
      setRating(5);
      alert('Отзыв отправлен!');
    } catch (error) {
      console.error('Ошибка при добавлении отзыва:', error);
      alert('Ошибка при отправке отзыва.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>Оставить отзыв</h3>

      <label>Ваша оценка:</label>
      <div className="rating-circles">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            type="button"
            key={num}
            className={`circle ${rating === num ? 'selected' : ''}`}
            onClick={() => setRating(num)}
          >
            {num}
          </button>
        ))}
      </div>

      <label>Текст отзыва:</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        rows={4}
        placeholder="Поделитесь впечатлениями..."
      />
      <button type="submit" className="submit-btn">Отправить</button>
    </form>
  );
}

export default ReviewForm;
