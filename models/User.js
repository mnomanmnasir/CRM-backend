const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'admin' },
  permissions: {
    can_edit: { type: Boolean, default: false },
    can_delete: { type: Boolean, default: false },
    can_view: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model("User", userSchema);
