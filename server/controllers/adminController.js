const Admin = require("../models/adminModel");
// admin login
const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: "Missing required fields" });
  }
  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    res.status(400).json({ error: "Invalid username or password" });
  }
  if (admin) {
    res.status(200).json({ message: "Login Success" });
  }
  return;
};
module.exports = { adminLogin };
// Path: backend\controllers\recipeController.js
// Compare this snippet from backend\routes\recipeRoute.js:
// const express = require("express");
//
