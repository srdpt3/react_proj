const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const cors = require("cors");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "asdfaskjfklas;djfkasjejkd";
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173/", "http://127.0.0.1:5173/"],
  })
);
//ULYM5JPz2RvgvDKO

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({
      email,
    });
    if (userDoc) {
      const passwordConfirm = bcrypt.compareSync(password, userDoc.password);
      if (passwordConfirm) {
        jwt.sign(
          { email: userDoc.email, id: userDoc._id, name: userDoc.name },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json(userDoc);
          }
        );
      } else {
        res.status(422).json("password mismatch");
      }
    } else {
      res.status(422).json("Not Found");
    }
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
  } catch (e) {
    res.status(422).json(e);
  }
});

app.get("/profile", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.listen(4000);
