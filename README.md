# Smart Inventory Management System

## 🚀 Overview
The **Smart Inventory Management System** is a web-based solution designed to help small retail stores efficiently manage their stock using QR codes, real-time stock tracking, and low-stock alerts. The system consists of a **React.js frontend** and a **Node.js backend with Firebase** for database management.

## 📂 Project Structure
```
smart-inventory/
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── ProductList.js
│   │   │   ├── QRScanner.js
│   │   │   ├── LowStockAlerts.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   ├── firebase.js
│   │   ├── App.js
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
│── backend/
│   ├── routes/
│   │   ├── productRoutes.js
│   │   ├── qrRoutes.js
│   ├── models/
│   │   ├── Product.js
│   ├── server.js
│   ├── serviceAccountKey.json
│   ├── package.json
│── .gitignore
│── README.md
│── .env (Firebase config)
```

## 🎯 Features
✅ **QR Code Integration** - Generate QR codes for easy product tracking.
✅ **Real-time Stock Management** - Add, update, and track stock levels in real time.
✅ **Low Stock Alerts** - Get notified when products reach low stock levels.
✅ **User Authentication** - Secure login system with Firebase.
✅ **Responsive UI** - Optimized for mobile and desktop usage.

## 🛠️ Tech Stack
### **Frontend:**
- React.js (Vite)
- Firebase for real-time database
- React Router for navigation

### **Backend:**
- Node.js with Express.js
- Firebase Admin SDK
- QRCode.js for generating QR codes

## 🔧 Setup and Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/nitin01-cmd/smart-inventory.git
cd smart-inventory
```

### 2️⃣ Setup Backend
```sh
cd backend
npm install
```
Create a `serviceAccountKey.json` file in the `backend/` folder with your Firebase credentials.
```sh
node server.js
```
Backend will run on **http://localhost:5000**.

### 3️⃣ Setup Frontend
```sh
cd frontend
npm install
npm run dev
```
Frontend will run on **http://localhost:5173**.

## 🚀 Usage
1. **Login** using Firebase authentication.
2. **Add new products** to the inventory.
3. **Generate QR codes** for each product.
4. **Scan QR codes** to update stock levels.
5. **Monitor low stock alerts** in real time.


## 🛠️ API Endpoints
### Product Management
- **`POST /products/add`** - Add a new product
- **`GET /products/`** - Get all products
- **`PUT /products/update/:id`** - Update product quantity

### QR Code Management
- **`POST /qr/generate`** - Generate a QR code for a product

## 📜 License
This project is licensed under the MIT License.

## 👨‍💻 Contributors
- Nitin Singh(https://github.com/nitin01-cmd)

## ⭐ Support
If you like this project, give it a ⭐ on GitHub!

