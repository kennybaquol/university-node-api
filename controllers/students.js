////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Student = require("../models/student");
const fetch = require('node-fetch');
const { db } = require("../models/student");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// Index route
router.get("/", (req, res) => {
    // Find and send back JSON data on all students
    Student.find((error, result) => {
        if (error) {
            console.log(error)
        }
        else {
            res.send(result)
        }
    })
})

// New route
router.get("/new", (req, res) => {
    // Let client enter data for a new student
    // Send to Create route (POST) when done
    const apiKey = req.query.key

    res.render("students/new", {
        key : apiKey
    })
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
    Student.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        dateOfBirth : req.body.dateOfBirth,
        homeAddress : req.body.homeAddress,
        enrollmentStatus : req.body.enrollmentStatus,
        enrollmentDate : req.body.enrollmentDate
    }, (error, student) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(student)
            const apiKey = req.body.key
            res.redirect(`/students?key=${apiKey}`)
        }
    })
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
