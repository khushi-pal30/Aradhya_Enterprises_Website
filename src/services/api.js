const API_URL = "https://localhost:5001/api"; // backend URL

// 🔹 GET PRODUCTS
export const getProducts = async (category, material) => {
  let url = `${API_URL}/products`;

  const params = [];
  if (category) params.push(`category=${category}`);
  if (material) params.push(`material=${material}`);

  if (params.length) url += "?" + params.join("&");

  const res = await fetch(url);
  return res.json();
};

// 🔹 ADD PRODUCT (ADMIN)
export const addProduct = async (product) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

// 🔹 LOGIN
export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
