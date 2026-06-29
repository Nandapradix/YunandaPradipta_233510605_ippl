import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

export default function DetailPanel({
  location,
  reviews,
  setReviews,
}) {
  return (
    <div className="detail">
      <img
        src={location.image}
        alt={location.name}
      />

      <h2>{location.name}</h2>

      <p>⭐ {location.rating}</p>

      <p>📍 {location.city}</p>

      <p>🎣 {location.fish}</p>

      <br />

      <h3>Deskripsi</h3>

<p>
  {location.description}
</p>

<br />

<h3>Jam Terbaik</h3>

<p>{location.bestTime}</p>
<hr />

<h3>Informasi Cuaca</h3>

<div className="weather-card">

  <div className="weather-top">
    <h1>{location.weather.icon}</h1>

    <div>
      <h2>{location.weather.temperature}</h2>
      <span>{location.weather.status}</span>
    </div>
  </div>

  <div className="weather-info">

    <div>
      💨
      <p>Angin</p>
      <strong>{location.weather.wind}</strong>
    </div>

    <div>
      💧
      <p>Kelembapan</p>
      <strong>{location.weather.humidity}</strong>
    </div>

  </div>

</div>
      <hr />

      <h3>💬 Ulasan Pengunjung</h3>

      <ReviewList
        reviews={reviews}
        locationId={location.id}
      />

      <hr />

      <h3>✍️ Tulis Ulasan</h3>

      <ReviewForm
        locationId={location.id}
        reviews={reviews}
        setReviews={setReviews}
      />
    </div>
  );
}