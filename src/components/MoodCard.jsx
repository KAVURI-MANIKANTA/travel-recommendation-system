import { useNavigate } from "react-router-dom";

export default function MoodCard({ mood }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.card}
      onClick={() => navigate(`/mood/${mood.id}`)}
    >
      <h2>{mood.emoji}</h2>
      <h3>{mood.name}</h3>
    </div>
  );
}

const styles = {
  card: {
    padding: "30px",
    borderRadius: "15px",
    background: "white",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },
};