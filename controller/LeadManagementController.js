// const Lead = require("../models/LeadManagementModel");

// // Naya lead create karne ka function
// exports.createLead = async (req, res) => {
//   try {
//     const lead = new Lead(req.body);
//     await lead.save();
//     res.status(201).json(lead);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Sare leads retrieve karne ka function
// exports.getLeads = async (req, res) => {
//   try {
//     const leads = await Lead.find();
//     res.status(200).json(leads);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// // 📌 update api lead
// // exports.updateLead = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const updatedLead = await Lead.findByIdAndUpdate(id, req.body, { new: true });

// //     if (!updatedLead) {
// //       return res.status(404).json({ error: "Lead not found" });
// //     }

// //     res.status(200).json(updatedLead);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };
// // 🔹 Naya lead create karne ka function
// exports.createLead = async (req, res) => {
//   try {
//     const lead = new Lead(req.body);
//     await lead.save();
//     res.status(201).json(lead);
//   } catch (err) {
//     console.error("Create Lead Error:", err.message);
//     res.status(400).json({ error: err.message });
//   }
// };

// // 🔹 Sare leads retrieve karne ka function
// exports.getLeads = async (req, res) => {
//   try {
//     const leads = await Lead.find();
//     res.status(200).json(leads);
//   } catch (err) {
//     console.error("Get Leads Error:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// };

// // 📌 Update Lead (PUT - Full Update)
// exports.updateLead = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // ID ka validation
//     if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({ error: "Invalid Lead ID" });
//     }

//     // Database me Lead exist karti hai ya nahi
//     const existingLead = await Lead.findById(id);
//     if (!existingLead) {
//       return res.status(404).json({ error: "Lead not found" });
//     }

//     // Lead update karein
//     const updatedLead = await Lead.findByIdAndUpdate(id, req.body, { new: true });

//     res.status(200).json(updatedLead);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // 📌 Partial Update (PATCH - Sirf kuch fields update)
// // ✅ Update Lead API
// exports.updateLead = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({ error: "Invalid Lead ID" });
//     }

//     const updatedLead = await Lead.findByIdAndUpdate(id, req.body, { new: true });

//     if (!updatedLead) {
//       return res.status(404).json({ error: "Lead not found" });
//     }
//     res.status(200).json(updatedLead);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // ✅ Delete Lead API
// exports.deleteLead = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!id.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({ error: "Invalid Lead ID" });
//     }

//     const deletedLead = await Lead.findByIdAndDelete(id);

//     if (!deletedLead) {
//       return res.status(404).json({ error: "Lead not found" });
//     }

//     res.status(200).json({ message: "Lead deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const Lead = require("../models/LeadManagementModel");

// ✅ Create Lead API
exports.createLead = async (req, res) => {
  try {
    const { name,
      email,
      status,
      source,
      notes,
      assignedTo } = req.body;
    const Leads = new Lead({
      name,
      email,
      status,
      source,
      notes,
      assignedTo,
      userId: req.user.userId, // Associate lead with logged-in user
    })
    await Leads.save();
    res.status(201).json(Leads);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Get All Leads API
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ userId: req.user.userId });
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get Single Lead by ID API
exports.getLeadById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid Lead ID format" });
    }

    const lead = await Lead.findById(id);
    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.status(200).json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update Lead API
exports.updateLead = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid Lead ID format" });
    }

    const updatedLead = await Lead.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedLead) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.status(200).json(updatedLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete Lead API
exports.deleteLead = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid Lead ID format" });
    }

    const deletedLead = await Lead.findByIdAndDelete(id);

    if (!deletedLead) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.status(200).json({ message: "Lead deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
