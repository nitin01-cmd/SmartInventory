const express = require("express");
const router = express.Router();
const QRCode = require("qrcode");

// Generate QR Code
router.post("/generate", async (req, res) => {
  const { storeId } = req.body;
  const qrCodeData = `https://your-frontend-url.com/store/${storeId}`;
  const qrCodeImage = await QRCode.toDataURL(qrCodeData);
  res.send({ qrCodeImage });
});

module.exports = router;
