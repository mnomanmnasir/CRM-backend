// const express = require("express");
// const { registerUser, loginUser, getUser } = require("../controller/authController");
// const authMiddleware = require("../middlewares/authMiddleware");

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/current-user", authMiddleware, getUser);

// module.exports = router;


const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  forgotPassword,
  verifyOTP,
  resetPassword,
  assignPermissions
} = require("../controller/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current-user", authMiddleware, getUser);
router.post("/assign-permissions", assignPermissions);

// ✅ Forgot Password Routes
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);

module.exports = router;
