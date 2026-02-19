
// import { useState, useEffect } from "react";

// function AddProduct() {
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     category: "",
//     size: "",
//     image: null,
//     indexToEdit: undefined, // store index for edit
//   });

//   const [products, setProducts] = useState([]);

//   // Load products from localStorage on mount
//   useEffect(() => {
//     const existing = JSON.parse(localStorage.getItem("products")) || [];
//     setProducts(existing);
//   }, []);

//   // Save products to localStorage whenever products state changes
//   useEffect(() => {
//     localStorage.setItem("products", JSON.stringify(products));
//   }, [products]);

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setProduct({ ...product, image: e.target.files[0] });
//   };

//   const handleSubmit = () => {
//     if (!product.name || !product.price || !product.category) {
//       alert("Please fill all fields");
//       return;
//     }

//     let imageURL = product.image
//       ? URL.createObjectURL(product.image)
//       : products[product.indexToEdit]?.image || "/default.jpg";

//     const savedProduct = {
//       name: product.name,
//       price: parseInt(product.price),
//       category: product.category,
//       size: product.size,
//       image: imageURL,
//     };

//     let updatedProducts = [...products];

//     if (product.indexToEdit !== undefined) {
//       // Update existing product
//       updatedProducts[product.indexToEdit] = savedProduct;
//       alert("Product Updated Successfully");
//     } else {
//       // Add new product
//       updatedProducts.push(savedProduct);
//       alert("Product Added Successfully");
//     }

//     setProducts(updatedProducts);
//     setProduct({ name: "", price: "", category: "", size: "", image: null, indexToEdit: undefined });
//   };

//   const handleDelete = (index) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       const updated = [...products];
//       updated.splice(index, 1);
//       setProducts(updated);
//       alert("Product Deleted Successfully");
//     }
//   };

//   const handleEdit = (index) => {
//     const prod = products[index];
//     setProduct({
//       name: prod.name,
//       price: prod.price,
//       category: prod.category,
//       size: prod.size,
//       image: null, // user can select new image if needed
//       indexToEdit: index,
//     });
//   };

//   return (
//     <div className="container mt-4">
//       <h4>{product.indexToEdit !== undefined ? "Edit Product" : "Add Product"}</h4>

//       <div style={{ maxWidth: "500px" }}>
//         <input
//           className="form-control mb-2"
//           name="name"
//           placeholder="Product Name"
//           value={product.name}
//           onChange={handleChange}
//         />

//         <input
//           className="form-control mb-2"
//           name="price"
//           type="number"
//           placeholder="Price"
//           value={product.price}
//           onChange={handleChange}
//         />

//         <select
//           className="form-control mb-2"
//           name="category"
//           value={product.category}
//           onChange={handleChange}
//         >
//           <option value="">Select Category</option>
//           <option>Kitchenware</option>
//           <option>Hotel Setup</option>
//         </select>

//         <input
//           className="form-control mb-2"
//           name="size"
//           placeholder="Size (comma separated)"
//           value={product.size}
//           onChange={handleChange}
//         />

//         <input
//           type="file"
//           className="form-control mb-3"
//           accept="image/*"
//           onChange={handleImageChange}
//         />

//         <button className="btn btn-success w-100" onClick={handleSubmit}>
//           {product.indexToEdit !== undefined ? "Update Product" : "Add Product"}
//         </button>
//       </div>

//       <hr className="my-4" />
//       <h5>Existing Products</h5>

//       <div className="row">
//         {products.map((p, index) => (
//           <div key={index} className="col-md-3 mb-3">
//             <div className="card h-100 text-center">
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="card-img-top"
//                 style={{ height: "150px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h6>{p.name}</h6>
//                 <p>₹{p.price}</p>
//                 <p>{p.category}</p>
//                 {p.size && <p>Sizes: {p.size}</p>}
//                 <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>
//                   Edit
//                 </button>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AddProduct;

import { useState, useEffect } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    subCategory: "",
    sizes: "",
    imageFile: null,
    indexToEdit: undefined,
  });

  const [products, setProducts] = useState([]);

  /* 🔹 Load existing products */
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(existing);
  }, []);

  /* 🔹 Save whenever products change */
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, imageFile: e.target.files[0] });
  };

  const handleSubmit = () => {
    if (!product.name || !product.price || !product.category) {
      alert("Please fill all required fields");
      return;
    }

    const imageUrl = product.imageFile
      ? URL.createObjectURL(product.imageFile)
      : products[product.indexToEdit]?.imageUrl || "/default.jpg";

    const savedProduct = {
      id: product.indexToEdit ?? Date.now(),
      name: product.name,
      price: Number(product.price),
      category: product.category,
      subCategory: product.subCategory,
      sizes: product.sizes,
      imageUrl: imageUrl,
    };

    const updatedProducts = [...products];

    if (product.indexToEdit !== undefined) {
      updatedProducts[product.indexToEdit] = savedProduct;
      alert("Product Updated Successfully");
    } else {
      updatedProducts.push(savedProduct);
      alert("Product Added Successfully");
    }

    setProducts(updatedProducts);
    setProduct({
      name: "",
      price: "",
      category: "",
      subCategory: "",
      sizes: "",
      imageFile: null,
      indexToEdit: undefined,
    });
  };

  const handleDelete = (index) => {
    if (window.confirm("Delete this product?")) {
      const updated = [...products];
      updated.splice(index, 1);
      setProducts(updated);
    }
  };

  const handleEdit = (index) => {
    const p = products[index];
    setProduct({
      name: p.name,
      price: p.price,
      category: p.category,
      subCategory: p.subCategory,
      sizes: p.sizes,
      imageFile: null,
      indexToEdit: index,
    });
  };

  return (
    <div className="container mt-4">
      <h4>{product.indexToEdit !== undefined ? "Edit Product" : "Add Product"}</h4>

      <div style={{ maxWidth: "500px" }}>
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="price"
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <select
          className="form-control mb-2"
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option>Kitchenware</option>
          <option>Hotel Setup</option>
        </select>

        {product.category === "Kitchenware" && (
          <input
            className="form-control mb-2"
            name="subCategory"
            placeholder="Sub Category (Steel, Wood etc)"
            value={product.subCategory}
            onChange={handleChange}
          />
        )}

        <input
          className="form-control mb-2"
          name="sizes"
          placeholder="Sizes (Small,Medium,Large)"
          value={product.sizes}
          onChange={handleChange}
        />

        <input
          type="file"
          className="form-control mb-3"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button className="btn btn-success w-100" onClick={handleSubmit}>
          {product.indexToEdit !== undefined ? "Update Product" : "Add Product"}
        </button>
      </div>

      <hr />

      <h5>Existing Products</h5>
      <div className="row">
        {products.map((p, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card h-100 text-center">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="card-img-top"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h6>{p.name}</h6>
                <p>₹{p.price}</p>
                <p>{p.category}</p>
                {p.sizes && <small>Sizes: {p.sizes}</small>}
                <div className="mt-2">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddProduct;
