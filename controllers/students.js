////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Student = require("../models/student");
const fetch = require('node-fetch');

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// Index route
router.get("/", (req, res) => {
    res.send('Index')

    // Fetch data on all students
})

// New route
router.get("/new", (req, res) => {
    res.send('New')
})

// Show route
router.get("/:id", (req, res) => {
    res.send('Show')
})

// Edit route
router.get("/:id/edit", (req, res) => {
    res.send('Edit')
})

// Create route
router.post("/", (req, res) => {
    res.send('Create')
})

// Update route
router.put("/:id", (req, res) => {
    res.send('Update')
})

// Delete route
router.delete("/:id", (req, res) => {
    res.send('Delete')
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router
