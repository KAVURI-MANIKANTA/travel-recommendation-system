import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mood from "./pages/Mood";
import Destinations from "./pages/Destinations";
import Wishlist from "./pages/Wishlist";
import "./index.css";
import "./styles/navbar.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood/:id" element={<Mood />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </BrowserRouter>
  );
}
