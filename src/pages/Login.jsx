import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Frontend demo login
    localStorage.setItem("user", email);

    alert(isRegister ? "Registered Successfully" : "Login Successful");
    navigate("/products"); // login ke baad redirect
  };

  return (
    <div
  className="container"
  style={{ maxWidth: "400px", marginTop: "120px" }}
>
      <div className="card p-4">

        <h4 className="text-center mb-3">
          {isRegister ? "Register" : "Login"}
        </h4>

        {/* Register Name */}
        {isRegister && (
          <input
            className="form-control mb-2"
            placeholder="Full Name"
          />
        )}

        {/* Email */}
        <input
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          {isRegister ? "Register" : "Login"}
        </button>

        {/* Toggle */}
        <p className="text-center mt-3 mb-0">
          {isRegister ? "Already have an account?" : "New user?"}{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;
