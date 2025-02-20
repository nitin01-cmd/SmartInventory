import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import QRScanner from "./components/QRScanner";
import LowStockAlerts from "./components/LowStockAlerts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/qrscanner" element={<QRScanner />} />
        <Route path="/alerts" element={<LowStockAlerts />} />
      </Routes>
    </Router>
  );
};

export default App;
