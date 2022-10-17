/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// Pull schema and model from mongoose
const { Schema, model } = mongoose

// Make summaries schema
const studentsSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  homeAddress: String,
  enrollmentStatus: String,
  enrollmentDate: Date,
  studentId: Number
})


// Make Student model
const Student = model("Student", studentsSchema)

////////////////////////////////////////////////
// Export model
////////////////////////////////////////////////
module.exports = Student