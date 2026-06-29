import locations from "../data/locations";
import LocationCard from "./LocationCard";

export default function Sidebar({
    selected,
    setSelected
}) {

    return (

        <div className="sidebar">

            <h2>Spot Populer</h2>

            {locations.map(item => (

                <LocationCard

                    key={item.id}

                    location={item}

                    active={selected.id === item.id}

                    onClick={() => setSelected(item)}

                />

            ))}

        </div>

    )

}