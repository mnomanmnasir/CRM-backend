const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Converted"],
      default: "New"
    },
    source: { type: String },
    notes: { type: String },
    assignedTo: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
