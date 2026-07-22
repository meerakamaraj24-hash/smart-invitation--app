require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

console.log("DNS:", dns.getServers());

const app = express();

app.use(cors());
app.use(express.json());

console.log("Mongo URI:", process.env.MONGO_URI);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error");
    console.log(err);
  });

// Schema
const WeddingSchema = new mongoose.Schema({
  brideName: String,
  groomName: String,
  venue: String,
  location: String,
  contact: String,
  weddingDate: String,
  weddingTime: String,
  railwayLink: String,
  busStandLink: String,
  airportLink: String,
  photo: String,
});

// Model
const Wedding = mongoose.model("Wedding", WeddingSchema);

// ================= SAVE WEDDING =================

app.post("/wedding", async (req, res) => {
  try {
    console.log("Received Data:");
    console.log(req.body);

    const wedding = await Wedding.create(req.body);

    console.log("Saved Wedding:");
    console.log(wedding);

    res.json({
      id: wedding._id,
    });

  } catch (err) {
    console.log("FULL ERROR:");
    console.log(err);

    res.status(500).json({
      error: err.message,
    });
  }
});
// ================= GET WEDDING =================

app.get("/wedding/:id", async (req, res) => {
  try {
    console.log("Fetching ID:", req.params.id);

    const wedding = await Wedding.findById(req.params.id);

    if (!wedding) {
      return res.status(404).json({
        message: "Wedding Not Found",
      });
    }

    res.json(wedding);
  } catch (error) {
    console.log("❌ Error Fetching Wedding");
    console.log(error);

    res.status(500).json({
      message: "Error fetching wedding",
    });
  }
});

// ================= START SERVER =================

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});