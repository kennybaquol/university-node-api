/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
require("dotenv").config() // Load ENV Variables
const express = require("express")
// const bodyParser = require("body-parser")
// const morgan = require("morgan");
// const mongoose = require("mongoose");
// const path = require("path")
const StudentRouter = require('./controllers/students')
// const methodOverride = require("method-override");
const session = require("express-session")
const MongoStore = require("connect-mongo")



/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = express()

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
// app.use(morgan("tiny")) //logging
// app.use(express.urlencoded({ extended: true })) // parse urlencoded request bodies
// app.use(methodOverride("_method")) // override for put and delete requests from forms
// app.use(express.static("public")) // serve files from public statically

// Middleware to setup session
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false,
  })
)
app.use(function (req, res, next) {
  res.header('Origin, X-Requested-With, Content-Type, Accept, API-Key')
  next()
})

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// Send all "/students" routes to student router only if the valid API is presented
app.get(`/students`, function(req, res, next) {
  const apiKey = req.query.key
  if (!apiKey || process.env.API_KEY !== apiKey) {
    res.status(401).send('Status: Unauthorized')
  }
  else {
    next()
  }
}) 
app.use(`/students`, StudentRouter) 

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))