const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    company: { type: String },
    interactions: [{ type: String }] // Aap yahan detailed objects bhi use kar sakte hain
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
