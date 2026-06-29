import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Hero({ locations, setSelected }) {
  const [keyword, setKeyword] = useState("");

  const filtered = keyword
    ? locations.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : [];

  const handleSelect = (item) => {
    setSelected(item);
    setKeyword(item.name);

    document
      .getElementById("lokasi")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearch = () => {
    if (filtered.length > 0) {
      handleSelect(filtered[0]);
    }
  };

  return (
    <section className="hero" id="beranda">
      <div className="overlay">
        <h1>Temukan Spot Mancing Terbaik</h1>

        <p>
          Cari lokasi memancing favorit dengan cepat dan mudah.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <h2>150+</h2>
            <span>Spot Mancing</span>
          </div>

          <div className="hero-stat">
            <h2>2.300+</h2>
            <span>Pengguna</span>
          </div>

          <div className="hero-stat">
            <h2>4.9★</h2>
            <span>Rating</span>
          </div>

          <div className="hero-stat">
            <h2>25+</h2>
            <span>Jenis Ikan</span>
          </div>
        </div>

        <div className="search-wrapper">
          <div className="search-box">
            <input
              type="text"
              placeholder="Cari lokasi pemancingan..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />

            <button onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>

          {filtered.length > 0 && (
            <div className="search-result">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="search-item"
                  onClick={() => handleSelect(item)}
                >
                  📍 <strong>{item.name}</strong>
                  <br />
                  <small>{item.city}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}