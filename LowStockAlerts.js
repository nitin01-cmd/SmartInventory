import React, { useState, useEffect } from "react";
import axios from "axios";

const LowStockAlerts = () => {
  const [lowStockItems, setLowStockItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      const filteredItems = res.data.filter((item) => item.quantity < 5);
      setLowStockItems(filteredItems);
    });
  }, []);

  return (
    <div>
      <h2>Low Stock Alerts</h2>
      {lowStockItems.length > 0 ? (
        lowStockItems.map((item) => <div key={item.id}>{item.name} is low in stock!</div>)
      ) : (
        <p>All items are well-stocked.</p>
      )}
    </div>
  );
};

export default LowStockAlerts;
