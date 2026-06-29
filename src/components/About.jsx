import {
  FaFish,
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-header">
  <span className="about-badge">🎣 Platform Pencarian Spot Mancing</span>

  <h2>Temukan Spot Mancing Favoritmu</h2>

  <p>
    Jelajahi ratusan lokasi pemancingan, lihat informasi jenis ikan,
    cek rating dari pemancing lain, dan temukan spot terbaik
    dengan mudah melalui peta interaktif.
  </p>
  <div>
    .
    </div>
</div>

      <div className="stats">
        <div className="stat-box">
          <FaMapMarkerAlt size={35} />
          <h3>150+</h3>
          <span>Spot Mancing</span>
        </div>

        <div className="stat-box">
          <FaUsers size={35} />
          <h3>2.300+</h3>
          <span>Pengguna Aktif</span>
        </div>

        <div className="stat-box">
          <FaStar size={35} />
          <h3>4.9</h3>
          <span>Rating Pengguna</span>
        </div>

        <div className="stat-box">
          <FaFish size={35} />
          <h3>25+</h3>
          <span>Jenis Ikan</span>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <FaMapMarkerAlt size={45} />
          <h3>Cari Lokasi</h3>
          <p>
            Temukan spot memancing terbaik melalui peta interaktif lengkap
            dengan informasi lokasi dan jarak dari posisi Anda.
          </p>
        </div>

        <div className="about-card">
          <FaFish size={45} />
          <h3>Informasi Ikan</h3>
          <p>
            Lihat jenis ikan yang tersedia di setiap lokasi sehingga Anda dapat
            menentukan perlengkapan dan umpan yang tepat.
          </p>
        </div>

        <div className="about-card">
          <FaStar size={45} />
          <h3>Rating & Ulasan</h3>
          <p>
            Baca pengalaman pemancing lain dan berikan penilaian setelah
            mengunjungi lokasi favoritmu.
          </p>
        </div>
      </div>
    </section>
  );
}