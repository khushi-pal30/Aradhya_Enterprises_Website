import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import products from "../data/products";
import "./Products.css";

const categories = ["All", "Aluminium", "Wooden", "Cutlery", "Marble", "MS"];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get("category");
  const urlSearch = searchParams.get("search");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState({});

  const [visibleCount, setVisibleCount] = useState(8); // number of products initially visible

  // Sync URL category and search with selectedCategory
  useEffect(() => {
    if (urlCategory) setSelectedCategory(urlCategory);
    else setSelectedCategory("All");

    setVisibleCount(8); // reset visible count when category or search changes
  }, [urlCategory, urlSearch]);

  // Initialize default sizes
  useEffect(() => {
    const initialSizes = {};
    products.forEach((p) => {
      initialSizes[p.id] = p.sizes[0].size;
    });
    setSelectedSizes(initialSizes);
  }, []);

  // Filter products by category and search
  let filteredProducts = products;

  // Filter by category
  if (selectedCategory !== "All") {
    filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory);
  }

  // Filter by search query
  if (urlSearch) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(urlSearch.toLowerCase())
    );
  }

  // Get only visible products
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Handle size change
  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  // Add to Cart
  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id];
    const priceObj = product.sizes.find((s) => s.size === selectedSize);
    const price = priceObj ? priceObj.price : product.sizes[0].price;

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = storedCart.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

if (existingIndex >= 0) {
      storedCart[existingIndex].quantity += 1;
    } else {
      storedCart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        size: selectedSize,
        price,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    alert(`${product.name} (${selectedSize}) added to cart!`);
  };

  // Load more products
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more products
  };

  return (
    <div className="products-page">
      {/* Sidebar */}
      <div className="category-sidebar">
        <h3>Categories</h3>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => {
              setSelectedCategory(cat);
              const params = {};
              if (cat !== "All") params.category = cat;
              if (urlSearch) params.search = urlSearch;
              setSearchParams(params);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="products-container">
        {visibleProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          <>
            {visibleProducts.map((item) => {
              const selectedSize = selectedSizes[item.id];
              const priceObj = item.sizes.find((s) => s.size === selectedSize);
              const price = priceObj ? priceObj.price : item.sizes[0].price;

              return (
                <div className="product-card" key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                  </Link>

                  <select
                    value={selectedSize}
                    onChange={(e) => handleSizeChange(item.id, e.target.value)}
                  >
                    {item.sizes.map((s) => (
                      <option key={s.size} value={s.size}>
                        {s.size}
                      </option>
                    ))}
                  </select>

                  <p>₹{price}</p>
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              );
            })}

            {/* Load More button */}
            {visibleCount < filteredProducts.length && (
              <div className="load-more-container">
                <button className="load-more-btn" onClick={handleLoadMore}>
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;

