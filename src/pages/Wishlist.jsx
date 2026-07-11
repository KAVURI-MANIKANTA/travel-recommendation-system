import { useState } from "react";
import "../styles/wishlist.css";
import { motion } from "framer-motion";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  // REMOVE ITEM
  const removeItem = (index) => {
    const updated = [...wishlist];
    updated.splice(index, 1);
    setWishlist(updated);
  };

  return (
  <motion.div
    className="wish-page"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >

      {/* HEADER */}
      <div className="wish-header">
        <h1>Your Wishlist ❤️</h1>
        <p>Save your favorite destinations here</p>
      </div>

      {/* EMPTY STATE */}
      {wishlist.length === 0 ? (
        <div className="empty">
          <h2>No saved places yet 😕</h2>
          <p>Start exploring and add destinations to your wishlist!</p>
        </div>
      ) : (
        <div className="wish-grid">
          {wishlist.map((place, i) => (
            <div key={i} className="wish-card">

              <img src={place.image} alt={place.name} />

              <div className="wish-overlay">
                <h3>{place.name}</h3>
                <p>{place.desc}</p>

                <button onClick={() => removeItem(i)}>
                  Remove ❌
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}