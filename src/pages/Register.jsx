import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Frontend demo register
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="container" style={{ marginTop: "120px" }}>

      <div className="card p-4">

        <h4 className="text-center mb-3">Register</h4>

        <input
          className="form-control mb-2"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={handleRegister}>
          Register
        </button>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;




// import { useState } from "react";
// import ProductCard from "../components/ProductCard";
// import KitchenSet from "../assets/products/KitchenSet.jpg";
// import steelutensil from "../assets/products/steelutensil.jpg";
// import Table from "../assets/products/Table.jpg";
// import Belan from "../assets/products/Belan.jpg";
// import Chairs from "../assets/products/Chairs.jpg";

// function Category() {
//   const categories = [
//     "All",
//     "Aluminium (Steel)",
//     "Wooden(Lakda)",
//     "MS (Loha)",
//     "Marble Prodcuts",
//     "Cutlery Item",
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const productsData = [
//     { name: "Steel Utensil",  image: steelutensil, category: "Aluminium (Steel)" },
//     { name: "Kitchen Set",  image: KitchenSet, category: "Aluminium (Steel)" },
//     //Wooden    
//     { name: "Sada Polpat",  image: Belan, category: "Wooden(Lakda)" },
//     { name: "Neemda Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Babul Samosa",  image: Belan, category: "Wooden(Lakda)" },
//     { name: "Babul High Polpat",  image: Belan, category: "Wooden(Lakda)" },
//     { name: "Babul Akhnda Ring Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Akanda Nichla Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Akanda Jambo", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Bhindi Samosa", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Bhindi High Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Bhindi Akanda Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag Samosa", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag High Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag High Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag High Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag Akanda Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sada Belan", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Bhindi Belan", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag Belan", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Shisham Belan", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag Gujrati Belan 17inch", image: Belan, category: "Wooden(Lakda)" },
//     { name: " Shisham Gujrati Belan 17inch", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Lakda Tabeta", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Butter Fly", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Lakda Nirlav", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Lakda Spoon", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Akanda Datta", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sada Datta", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sada Gol Ravae", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag Gol Ravae", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sada Rabae", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Sag Rabae", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Akanda Rabae", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Lakda Dhokha", image: Belan, category: "Wooden(Lakda)" },
//     { name: "special villy", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Cermica Villy", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Fiber Polpat", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Fiber Dhokha", image: Belan, category: "Wooden(Lakda)" },
//     { name: "Belan", image: Belan, category: "Wooden(Lakda)" },
    
//     // MS pro
//     { name: "MS Table",  image: Table, category: "MS (Loha)" },
//     { name: "Chair Set",  image: Chairs, category: "MS (Loha)" },
//     { name: "Marble Chakla",  image: KitchenSet, category: "Marble" },
//     { name: "Cutlery Set",  image: KitchenSet, category: "Cutlery" },
//   ];

//   const adminProducts = JSON.parse(localStorage.getItem("products")) || [];
//   const allProducts = [...productsData, ...adminProducts];

//   const filteredProducts =
//     selectedCategory === "All"
//       ? allProducts
//       : allProducts.filter(p => p.category === selectedCategory);

//   return (
//     <div className="container" style={{ marginTop: "120px" }}>
//       <div className="row">

//         {/* LEFT CATEGORY */}
//         <div className="col-md-3">
//           <h5>Categories</h5>
//           <ul className="list-group">
//             {categories.map((cat, i) => (
//               <li
//                 key={i}
//                 className={`list-group-item ${selectedCategory === cat ? "active" : ""}`}
//                 style={{ cursor: "pointer" }}
//                 onClick={() => setSelectedCategory(cat)}
//               >
//                 {cat}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* RIGHT PRODUCTS */}
//         <div className="col-md-9">
//           <h5>{selectedCategory} Products</h5>

//           <div className="row">
//             {filteredProducts.map((p, i) => (
//               <div className="col-md-4 mb-3" key={i}>
//                 <ProductCard
//                   name={p.name}
                  
//                   image={p.image}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Category;