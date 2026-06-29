import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewForm({
  locationId,
  reviews,
  setReviews,
}) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  function submit() {
    if (!name.trim() || !comment.trim()) {
      alert("Lengkapi semua data!");
      return;
    }

    const newReview = {
      id: Date.now(),
      locationId,
      user: name,
      comment,
      rating,
    };

    setReviews([...reviews, newReview]);

    setName("");
    setComment("");
    setRating(5);
    setHover(0);
  }

  return (
    <div className="review-form">

      <div className="input-group">
        <label>Nama</label>

        <input
          type="text"
          placeholder="Masukkan nama..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Rating</label>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className="star"
              size={28}
              color={(hover || rating) >= star ? "#fbbf24" : "#d1d5db"}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>
      </div>

      <div className="input-group">
        <label>Ulasan</label>

        <textarea
          placeholder="Bagikan pengalaman memancingmu..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button className="submit-btn" onClick={submit}>
        Kirim Ulasan
      </button>

    </div>
  );
}