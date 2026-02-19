import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slide1 from "../assets/products/ali.jpg";
import slide2 from "../assets/products/woden.jpg";
import slide3 from "../assets/products/stainless.jpg";
import slide4 from "../assets/products/khalti.jpg";
import slide5 from "../assets/products/OIP.webp";
import "./HeroSlider.css";

const slides = [
  {
    title: "Steel & Aluminium",
    desc: "Strong and durable steel products.",
    image: slide1,
  },
  {
    title: "Wooden Products (Lakda)",
    desc: "Explore our premium collection of wooden products.",
    image: slide2,
  },
  {
    title: "Cutlary Products",
    desc: "Premium cutlary products for your kitchen.",
    image: slide3,
  },
  {
    title: "Marbal Products",
    desc: "Strong & long-lasting marbal products.",
    image: slide4,
  },
  {
    title: "MS (Lokhan)",
    desc: "Strong and durable MS products.",
    image: slide5,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // 🔁 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]); // 👈 important

  // ⬅ LEFT
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ➡ RIGHT
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-slider">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
        >
          <div className="overlay">
            <span>ARADHYA ENTERPRISES</span>
            <h1>{s.title}</h1>
            <p>{s.desc}</p>

            <div className="buttons">
              <Link to="/products">
                <button className="primary">View Collection →</button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* ⬅ ➡ ARROW BUTTONS */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      {/* ● DOTS */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

