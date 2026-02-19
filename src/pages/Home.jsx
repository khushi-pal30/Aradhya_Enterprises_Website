import HeroSlider from "../components/HeroSlider";
import { Link } from "react-router-dom";
import "./Home.css";
import slide1 from "../assets/products/ali.jpg";
import slide2 from "../assets/products/woden.jpg";
import slide3 from "../assets/products/stainless.jpg";
import slide4 from "../assets/products/khalti.jpg";
import slide5 from "../assets/products/OIP.webp";

function Home() {
  return (
    <>
      {/* 🔥 HERO SLIDER */}
      <HeroSlider />

      {/* 🔶 EXPLORE BY CATEGORY */}
      <section className="category-section">
        <h2>
          Explore by <span>Category</span>
        </h2>
        <p className="sub-text">
          Discover our comprehensive range of premium supplies.
        </p>

        <div className="category-grid">
          <Link to="/products?category=Aluminium" className="category-card">
  <img src={slide1} alt="Aluminium" />
  <h5>Aluminium products</h5>
</Link>

<Link to="/products?category=Wooden" className="category-card">
  <img src={slide2} alt="Wooden" />
  <h5>Wooden(Lakda) products</h5>
</Link>

<Link to="/products?category=Cutlery" className="category-card">
  <img src={slide3} alt="Cutlery" />
  <h5>Cutlery products </h5>
</Link>

<Link to="/products?category=Marble" className="category-card">
  <img src={slide4} alt="Marble" />
  <h5>Marble products</h5>
</Link>

<Link to="/products?category=MS" className="category-card">
  <img src={slide5} alt="MS(Lokhan)" />
  <h5>MS-Lokhan products</h5>
</Link>

        </div>
      </section>
    </>
  );
}

export default Home;
