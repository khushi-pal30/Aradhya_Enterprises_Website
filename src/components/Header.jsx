import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data/products";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0); // ✅ FIX
  const navigate = useNavigate();

  // 🔄 Auto change placeholder
  useEffect(() => {
    if (!products || products.length === 0) return;

    const interval = setInterval(() => {
      setPlaceholderIndex((prev) =>
        prev === products.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar navbar-dark bg-primary px-4 fixed-top main-header">

      {/* LEFT: Brand */}
      <div className="navbar-brand">
        <h4 className="mb-0 text-white">Aradhya Enterprises</h4>
        <small className="text-white">
          Wholesaler of Kitchenware & Hotel Setup
        </small>
      </div>

      {/* CENTER: Search */}
      <form className="d-flex w-25" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="text"
          placeholder={`Search for ${products[placeholderIndex]?.name || "products"}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-light" type="submit">
          Search
        </button>
      </form>

      {/* RIGHT: Buttons */}
      <div>
        <Link to="/" className="btn btn-light mx-1">Home</Link>
        <Link to="/login" className="btn btn-light mx-2">Login</Link>
        <Link to="/register" className="btn btn-light mx-1">Register</Link>
        <Link to="/cart" className="btn btn-warning">🛒 Cart</Link>
      </div>

    </nav>
  );
}

export default Header;

