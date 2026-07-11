import { useState } from "react";
import "../styles/destination.css";
import data from "../data/moodData";
import { motion } from "framer-motion";

export default function Destinations() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("all");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const allPlaces = Object.values(data).flat();

  const filtered = allPlaces.filter((place) => {
    return (
      (active === "all" || place.category === active) &&
      place.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <motion.div
    className="dest-page"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    >

      {/* HEADER */}
      <div className="dest-header">
        <h1>Explore Destinations 🌍</h1>
        <p>Find your perfect place</p>

        <input
          type="text"
          placeholder="Search destinations..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FILTER */}
      <div className="filter-bar">
        {[
      { key: "all", label: "All" },
      { key: "relax", label: "Relax 🌿" },
      { key: "party", label: "Party 🎉" },
      { key: "adventure", label: "Adventure 🏔️" },
        ].map((f) => (
        <button
        key={f.key}
        className={`filter-btn ${active === f.key ? "active" : ""}`}
        onClick={() => setActive(f.key)}
        >
        {f.label}
        </button>
        ))}
      </div>

      {/* GRID */}
      <div className="dest-grid">
        {filtered.map((place, i) => (
          <div
            key={i}
            className="dest-card"
            onClick={() => setSelectedPlace(place)}
          >
            <img src={place.image} alt={place.name} />

            <div className="dest-overlay">
              <h3>{place.name}</h3>
              <p>{place.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
      <p style={{ marginTop: "40px", textAlign: "center", color: "#777" }}>
          No destinations found 😕
      </p>
      )}

      {/* DETAIL MODAL */}
      {selectedPlace && (
        <div className="modal">
          <div className="modal-content detail-modal">
            <span className="close" onClick={() => setSelectedPlace(null)}>
              ✖
            </span>

            <img
              src={selectedPlace.image}
              alt=""
              className="detail-img"
            />

            <h2>{selectedPlace.name}</h2>
            <p className="detail-desc">{selectedPlace.desc}</p>
            <p className="detail-info">{selectedPlace.details}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}