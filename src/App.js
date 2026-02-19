import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Register from "./pages/Register";




function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
       <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/admin/AddProduct" element={<AddProduct />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


