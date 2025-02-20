const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

const db = admin.firestore();

// Add Product
router.post("/add", async (req, res) => {
  const { name, quantity, price } = req.body;
  const productRef = db.collection("products").doc();
  await productRef.set({ name, quantity, price, id: productRef.id });
  res.send({ message: "Product added", id: productRef.id });
});

// Get Products
router.get("/", async (req, res) => {
  const snapshot = await db.collection("products").get();
  res.send(snapshot.docs.map((doc) => doc.data()));
});

// Update Stock
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  await db.collection("products").doc(id).update({ quantity });
  res.send({ message: "Stock updated" });
});

module.exports = router;
