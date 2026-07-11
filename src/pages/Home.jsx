import { useState } from "react";
import moodData from "../data/moodData";
import "../styles/home.css";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { key: "relax", label: "Relax 🌿" },
    { key: "party", label: "Party 🎉" },
    { key: "adventure", label: "Adventure 🏔️" },
    { key: "romantic", label: "Romantic 💕" },
    { key: "peaceful", label: "Peaceful 🧘" },
  ];

  
    return (
      <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      >
    {/* HERO */}
    <div className="hero">
        <div className="overlay">
          <h1>Find Your Perfect Travel Mood 🌍</h1>
          <p className="hero-sub">
            Discover destinations based on how you feel
          </p>

          <button
            className="cta"
            onClick={() =>
              document
                .getElementById("mood-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Moods
          </button>
        </div>
      </div>

      {/* MOODS */}
      <div className="section" id="mood-section">
        <h2 className="section-title">How are you feeling today?</h2>

        <div className="mood-grid">
          {moods.map((m) => (
            <div
              key={m.key}
              className="mood-card"
              onClick={() => setSelectedMood(m.key)}
            >
              {m.label}
            </div>
          ))}
        </div>
      </div>

      {/* CURATED (DEFAULT RELAX) */}
      <div className="section">
        <h2 className="section-title">Curated for your mood ✨</h2>

        <div className="home-grid">
          {moodData["relax"].slice(0, 3).map((place, index) => (
            <div
              key={index}
              className="home-card"
              onClick={(e) =>
                e.currentTarget.classList.toggle("flipped")
              }
            >
              <div className="home-inner">

                {/* FRONT */}
                <div className="home-front">
                  <img src={place.image} alt={place.name} />
                  <div className="card-overlay">
                    <h3>{place.name}</h3>
                    <p>{place.desc}</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="home-back">
                  <h3>{place.name}</h3>
                  <p>{place.details}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL (MOOD CLICK) */}
      {selectedMood && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => setSelectedMood(null)}
            >
              ✖
            </span>

            <h2>{selectedMood.toUpperCase()} Places</h2>

            <div className="home-grid">
              {moodData[selectedMood].map((place, index) => (
                <div
                  key={index}
                  className="home-card"
                  onClick={(e) =>
                    e.currentTarget.classList.toggle("flipped")
                  }
                >
                  <div className="home-inner">

                    <div className="home-front">
                      <img src={place.image} alt={place.name} />
                      <div className="card-overlay">
                        <h3>{place.name}</h3>
                        <p>{place.desc}</p>
                      </div>
                    </div>

                    <div className="home-back">
                      <h3>{place.name}</h3>
                      <p>{place.details}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 MoodTravel</p>
      </footer>
      </motion.div>
  );
}