import { FaFish } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-circle">
          <FaFish />
        </div>

        <div className="logo-title">
          <h2>MATA</h2>
          <span>PANCING</span>
        </div>
      </div>

      <ul>
        <li>
          <a href="#beranda">Beranda</a>
        </li>

        <li>
          <a href="#lokasi">Lokasi</a>
        </li>

        <li>
          <a href="#about">Tentang</a>
        </li>
      </ul>
    </nav>
  );
}