// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // TEMP (later backend)
//     if (email === "admin@aradhya.com" && password === "admin123") {
//       localStorage.setItem("admin", "true");
//       navigate("/admin/dashboard");
//     } else {
//       alert("Invalid Admin Credentials");
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: "400px" }}>
//       <div className="card p-4">
//         <h4 className="text-center mb-3">Admin Login</h4>

//         <input
//           className="form-control mb-2"
//           placeholder="Admin Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="btn btn-dark w-100" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// // export default AdminLogin;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // 🔒 TEMP ADMIN LOGIN (frontend only)
    if (email === "admin@aradhya.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");   // 🔑 standard key
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="card p-4 shadow">
        <h4 className="text-center mb-3">Admin Login</h4>

        <input
          type="email"
          className="form-control mb-2"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-dark w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
