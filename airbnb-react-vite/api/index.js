const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173/",
  })
);
//ULYM5JPz2RvgvDKO

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  res.json();
});

app.listen(4000);
