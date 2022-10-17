////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Student = require("../models/student");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// Index route
router.get("/", (req, res) => {
    // Find all students and send data back to client in response
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
        key: apiKey
    })
})

// Show route
router.get("/:id", (req, res) => {
    // Find student by studentId and send data back to client in response
    let id = req.params.id
    Student.find(({ studentId: id }), (error, student) => {
        if (error) {
            console.log(error)
        }
        else {
            res.send(student)
        }
    })
})

// Search route
router.get("/search/:name", (req, res) => {
    /**
     * NOT
     * YET
     * COMPLETED
     * !
     */
    console.log('running search route')
    let name = req.params.name
    name = name.toUpperCase()
    console.log(name)
    Student.find(({ firstName: { $gte: name } }), (error, student) => {
        if (error) {
            console.log(error)
        }
        else {
            res.send(student)
        }
    })
})

// Edit route
router.get("/:id/edit", (req, res) => {
    // Find student by studentId to be edited
    let id = req.params.id
    Student.find(({ studentId: id }), (error, result) => {
        if (error) {
            console.log(error)
        }
        else {
            // Liquid won't pass result in its Mongoose form, so pass it as an object
            let student = {
                firstName: result[0].firstName,
                lastName: result[0].lastName,
                dateOfBirth: result[0].dateOfBirth,
                homeAddress: result[0].homeAddress,
                enrollmentStatus: result[0].enrollmentStatus,
                enrollmentDate: result[0].enrollmentDate,
                studentId: result[0].studentId
            }

            // Let user edit data for a current student
            // Send to Update route (PUT) when done
            const apiKey = req.query.key
            res.render("students/edit", {
                student,
                key: apiKey
            })
        }
    })
})

// Create route
router.post("/", (req, res) => {
    // Create new student with a randomly generated studentId and formatted full name
    let firstName = req.body.firstName
    firstName = firstName.toUpperCase()
    let lastName = req.body.lastName
    lastName = lastName.toUpperCase()
    let currentId = Math.floor(Math.random() * 999999999)

    Student.create({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: req.body.dateOfBirth,
        homeAddress: req.body.homeAddress,
        enrollmentStatus: req.body.enrollmentStatus,
        enrollmentDate: req.body.enrollmentDate,
        studentId: currentId
    }, (error, student) => {
        if (error) {
            console.log(error)
        }
        else {
            const apiKey = req.body.key
            res.redirect(`/students?key=${apiKey}`)
        }
    })
})

// Update route
router.put("/:id", (req, res) => {
    // Find student by studentId to be updated
    let firstName = req.body.firstName
    firstName = firstName.toUpperCase()
    let lastName = req.body.lastName
    lastName = lastName.toUpperCase()
    const studentId = req.body.studentId

    Student.updateOne({
        studentId: studentId
    },
        {
            $set: {
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: req.body.dateOfBirth,
                homeAddress: req.body.homeAddress,
                enrollmentStatus: req.body.enrollmentStatus,
                enrollmentDate: req.body.enrollmentDate
            }
        }, (error, student) => {
            if (error) {
                console.log(error)
            }
            else {
                const apiKey = req.body.key
                res.redirect(`/students/${studentId}/?key=${apiKey}`)
            }
        })
})

// Get route/endpoint to take user to delete route
router.get("/:id/delete", (req,res) => {
    // Find student by studentId to be deleted
    const apiKey = req.query.key
    let id = req.params.id
    Student.find(({ studentId: id }), (error, result) => {
        if (error) {
            console.log(error)
        }
        else {
            let student = {
                firstName: result[0].firstName,
                lastName: result[0].lastName,
                studentId: result[0].studentId
            }
            res.render('students/delete', {
                student,
                key: apiKey
            })
        }
    })
})

// Delete route
router.delete("/:id", (req, res) => {
    const apiKey = req.body.key
    const studentId = req.body.studentId

    Student.deleteOne({
        studentId: studentId
    }, (error) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log('Successfully deleted student ID: ' + studentId)
            res.redirect(`/students/?key=${apiKey}`)
        }
    })
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router
