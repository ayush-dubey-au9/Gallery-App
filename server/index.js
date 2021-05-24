const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const route = require("./Routes/PhotoRoutes");
const userRoutes = require("./Routes/User.js");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//All Routes
app.use("/photo", route);
app.use("/user", userRoutes);

const mongoURL = `mongodb+srv://dbuser:coding79@cluster0.2pbi3.mongodb.net/Cluster0?retryWrites=true&w=majority`;
const PORT = 5000;

mongoose
  .connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log(`${PORT} started`)))
  .catch((err) => console.log(err));
