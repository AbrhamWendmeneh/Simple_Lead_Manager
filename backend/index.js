const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/leads");

// Define the Lead model
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: ["New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"],
    default: "New",
  },
  createdAt: { type: Date, default: Date.now },
});

const Lead = mongoose.model("Lead", leadSchema);

// POST /leads → Add a new lead
app.post("/leads", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).send(lead);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET /leads → Fetch all leads
app.get("/leads", async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).send(leads);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
