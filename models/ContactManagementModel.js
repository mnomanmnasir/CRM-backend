const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    company: { type: String },
    interactions: [{ type: String }],// Aap yahan detailed objects bhi use kar sakte hain
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // contact belongs to a user

  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
