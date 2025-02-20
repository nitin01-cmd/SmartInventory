import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Inventory Dashboard</h2>
      {products.map((product) => (
        <div key={product.id}>{product.name} - {product.quantity}</div>
      ))}
    </div>
  );
};
export default Dashboard;
