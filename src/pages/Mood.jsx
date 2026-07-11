import { useState } from "react";
import moodData from "../data/moodData";
import { motion } from "framer-motion";

export default function Mood() {
  const [selectedMood, setSelectedMood] = useState("relax");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const moods = [
    { key: "relax", label: "Relax 🌿" },
    { key: "party", label: "Party 🎉" },
    { key: "adventure", label: "Adventure 🏔️" },
    { key: "romantic", label: "Romantic 💕" },
    { key: "peaceful", label: "Peaceful 🧘" },
  ];

  const places = moodData[selectedMood] || [];

  return (
    <div className="section">
      <h2 className="section-title">Choose Your Mood 😄</h2>

      {/* MOOD SELECT */}
      <div className="mood-grid">
        {moods.map((m) => (
          <div
            key={m.key}
            className={`mood-card ${selectedMood === m.key ? "active" : ""}`}
            onClick={() => {
              setSelectedMood(m.key);
              setSelectedPlace(null);
              setVisibleCount(6); // reset when mood changes
            }}
          >
            <p>{m.label}</p>
          </div>
        ))}
      </div>

      {/* PLACES */}
      <div className="card-grid">
        {places.slice(0, visibleCount).map((place, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedPlace(place)}
          >
            <img
              src={place.image}
              alt={place.name}
              loading="lazy"   // 🔥 performance fix
            />

            <div className="card-overlay">
              <h3>{place.name}</h3>
              <p>{place.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < places.length && (
        <button
          className="cta"
          onClick={() => setVisibleCount((prev) => prev + 6)}
        >
          Load More
        </button>
      )}

      {/* PLACE DETAILS */}
      {selectedPlace && (
        <div className="place-details">
          <h2>{selectedPlace.name}</h2>

          <img
            src={selectedPlace.image}
            alt={selectedPlace.name}
            loading="lazy"
          />

          <p>{selectedPlace.details}</p>
        </div>
      )}
    </div>
  );
}