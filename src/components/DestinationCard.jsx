export default function DestinationCard({ place }) {
  return (
    <div style={styles.card}>
      <img src={place.image} alt={place.name} style={styles.img} />
      <h3>{place.name}</h3>
      <p>{place.desc}</p>
      <button style={styles.btn}>❤️ Save</button>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "15px",
    overflow: "hidden",
    background: "white",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  btn: {
    padding: "10px",
    margin: "10px",
    border: "none",
    background: "#ff6b6b",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },
};