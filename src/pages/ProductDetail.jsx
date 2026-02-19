import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].size);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const selectedPriceObj = product.sizes.find((s) => s.size === selectedSize);
  const price = selectedPriceObj ? selectedPriceObj.price : product.sizes[0].price;

  const handleAddToCart = () => {
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
        size: selectedSize,
        price,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    alert(`${product.name} (${selectedSize}) added to cart!`);
  };

  return (
    <div className="product-detail-page">
      <button className="close-btn" onClick={() => navigate(-1)}>
        <span>&times;</span>
      </button>
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>Category: {product.category}</p>
          <div className="size-selection">
            <label>Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.sizes.map((s) => (
                <option key={s.size} value={s.size}>
                  {s.size}
                </option>
              ))}
            </select>
          </div>
          <p className="price">₹{price}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
