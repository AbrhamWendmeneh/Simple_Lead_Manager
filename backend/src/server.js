require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const leadRoutes = require("./routes/leadRoutes");

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://your-vercel-app.vercel.app",
    "*", // Temporarily allow all origins while testing
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Basic route for testing
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// Routes
app.use("/api/leads", leadRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
