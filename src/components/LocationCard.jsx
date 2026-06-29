export default function LocationCard({

    location,

    active,

    onClick

}) {

    return (

        <div

            className={`card ${active ? "active-card" : ""}`}

            onClick={onClick}

        >

            <img src={location.image} />

            <div className="card-body">

                <h3>{location.name}</h3>

                <p>⭐ {location.rating}</p>

                <p>🎣 {location.fish}</p>

                <p>📍 {location.city}</p>

            </div>

        </div>

    )

}