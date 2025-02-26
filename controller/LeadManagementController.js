const Lead = require("../models/LeadManagementModel");

// Naya lead create karne ka function
exports.createLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Sare leads retrieve karne ka function
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
