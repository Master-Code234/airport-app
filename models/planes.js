const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
  },
  arrival: { type: Date },
});

const Flight = mongoose.model("Flight", destinationSchema);

module.exports = Flight;
