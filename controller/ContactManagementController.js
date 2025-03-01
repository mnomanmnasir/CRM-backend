const Contact = require("../models/ContactManagementModel");

// // Naya contact create karne ka function
exports.createContact = async (req, res) => {
  try {
    const { name,
      email,
      phone,
      company,
      interactions } = req.body;
    const Contacts = new Contact({
      name,
      email,
      phone,
      company,
      interactions,
      userId: req.user.userId, // Associate product with logged-in user
    })
    await Contacts.save();
    res.status(201).json(Contacts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Sare contacts retrieve karne ka function
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ userId: req.user.userId });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// const Product = require("../models/Product");

// ✅ Add Product (Only Logged-in User Can Add)
// const createContact = async (req, res) => {
//   try {
//     const { name,
//       email,
//       phone,
//       company,
//       interactions } = req.body;
//     const Contacts = new Contact({
//       name,
//       email,
//       phone,
//       company,
//       interactions,
//       userId: req.user.userId, // Associate product with logged-in user
//     });

//     await Contacts.save();
//     // res.status(201).json({ message: "Product Added", product: newProduct });
//     res.status(201).json({ message: "Contact Added", contacts: Contacts });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding contact" });
//   }
// };

// // ✅ Fetch Products (Only Logged-in User's Products)
// const getContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find({ userId: req.user.userId });
//     res.status(200).json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products" });
//   }
// };

// module.exports = { getContacts, createContact };
