import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import locations from "../data/locations";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function ChangeView({ selected }) {
  const map = useMap();

  useEffect(() => {
    map.setView([selected.lat, selected.lng], 13);
  }, [selected, map]);

  return null;
}
const userIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/5216/5216405.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});
export default function MapView({ selected }) {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;

    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (R * c).toFixed(1);
  };

  return (
    <MapContainer
      center={[selected.lat, selected.lng]}
      zoom={13}
      className="map"
    >
      <ChangeView selected={selected} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marker Lokasi Pengguna */}
      {userLocation && (
        <Marker
        position={[userLocation.lat, userLocation.lng]}
        icon={userIcon}
>
          <Popup>
            <b>📍 Lokasi Anda</b>
          </Popup>
        </Marker>
      )}

      {/* Marker Spot Pemancingan */}
      {locations.map((item) => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
        >
          <Popup>
            <div>
              <h3>{item.name}</h3>

              {userLocation && (
                <p>
                  📏 Jarak dari Anda:{" "}
                  <strong>
                    {getDistance(
                      userLocation.lat,
                      userLocation.lng,
                      item.lat,
                      item.lng
                    )}{" "}
                    km
                  </strong>
                </p>
              )}

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}`}
                target="_blank"
                rel="noreferrer"
              >
                🧭 Buka Navigasi
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}