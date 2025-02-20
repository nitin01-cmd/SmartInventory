const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const QRCode = require("qrcode");
const productRoutes = require("./routes/productRoutes");
const qrRoutes = require("./routes/qrRoutes");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-url.firebaseio.com",
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/qr", qrRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
