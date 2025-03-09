const express = require("express");
const router = express.Router();

// Controllers import karen
const contactController = require("../controller/ContactManagementController");
const leadController = require("../controller/LeadManagementController");
const authMiddleware = require("../middlewares/authMiddleware");

// ----- Contacts Routes -----
router.post("/contacts", authMiddleware, contactController.createContact);
// Sare contacts retrieve karne ka route
router.get("/contacts", authMiddleware, contactController.getContacts);
router.get("/contacts/:id", leadController.getLeadById); // Get Single contact

// ----- Leads Routes -----
// Naya lead create karne ka route
router.post("/leads",authMiddleware, leadController.createLead);
// Sare leads retrieve karne ka route
router.get("/leads",authMiddleware, leadController.getLeads);
router.get("/leads/:id", leadController.getLeadById); // Get Single Lead
router.put("/leads/:id", leadController.updateLead); // Update Lead
router.delete("/leads/:id", leadController.deleteLead); // Delete Lead
module.exports = router;
