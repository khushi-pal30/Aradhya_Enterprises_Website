import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Remove item from cart
  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter(
      (_, index) => index !== indexToRemove
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="container"
      style={{ maxWidth: "500px", marginTop: "120px" }}
    >
      <h3>My Cart</h3>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Product</th>
                <th>Size</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.size}</td>
                  <td>₹{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h5 className="text-end">Total: ₹{total}</h5>
        </>
      )}
    </div>
  );
}

export default Cart;


