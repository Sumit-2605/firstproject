const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// DB
const connectDB = require("./config/db");
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
const userRoutes = require("./routes/userRoutes");
const contactRoute = require("./routes/contactRoute");
const reservationRoutes = require("./routes/reservationRoutes");
const menuRoutes = require("./routes/menuRoutes");

app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoute);
app.use("/api/reservation", reservationRoutes);
app.use("/api/menu", menuRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});