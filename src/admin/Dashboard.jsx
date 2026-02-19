
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/admin/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Admin Dashboard</h3>

      <div className="mt-3">
        {/* ✅ LINK WORKS ALWAYS */}
        <Link to="/admin/add-product" className="btn btn-success me-2">
          ➕ Add Product
        </Link>

        <Link to="/category" className="btn btn-primary me-2">
          📦 View Products
        </Link>

        <button className="btn btn-danger" onClick={logout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;


