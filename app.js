const express = require("express");

const app = express();

const port = 3000;
const mongoose = require("mongoose");

// Add dotnv
require("dotenv").config();

// mongoose

mongoose.connect(process.env.AIRPORT_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// MiddleWare

app.use((req, res, next) => {
  next();
});

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

// data

const Planes = require("./models/planes");

//  routes

app.get("/", (req, res) => {
  res.send(`<h1> Airport flights </h1>`);
});

app.get("/flights", (req, res) => {
  Planes.find({}, (error, allPlanes) => {
    res.render("../views/Index", {
      planes: allPlanes,
    });
  });
});

app.get("/flights/new", (req, res) => {
  res.render("../views/New");
});

app.post("/flights", (req, res) => {
  Planes.create(req.body, (error, createdFlight) => {
    res.redirect("/flights");
  });
});

// tell app to listen

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
