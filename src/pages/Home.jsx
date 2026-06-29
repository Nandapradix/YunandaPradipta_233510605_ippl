import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";
import DetailPanel from "../components/DetailPanel";
import About from "../components/About";

import locations from "../data/locations";
import reviewsData from "../data/reviews";

export default function Home() {

  const [selected, setSelected] = useState(locations[0]);

  const [reviews, setReviews] = useState(reviewsData);

  return (
    <>
      <Navbar />
      <Hero
  locations={locations}
  setSelected={setSelected}
/>

      <section className="content" id="lokasi">

        <Sidebar
          selected={selected}
          setSelected={setSelected}
        />

        <MapView
          selected={selected}
        />

        <DetailPanel
          location={selected}
          reviews={reviews}
          setReviews={setReviews}
        />
        

      </section>
      <About />

    </>
  );

}