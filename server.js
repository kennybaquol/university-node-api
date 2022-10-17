/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
require("dotenv").config() // Load ENV Variables
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const StudentRouter = require('./controllers/students')
const methodOverride = require("method-override")
const session = require("express-session")
const MongoStore = require("connect-mongo")

/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), { root: [path.resolve(__dirname, 'views/')] })


/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: true })) // parse urlencoded request bodies
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.static("public")) // serve files from public statically
app.use(bodyParser.json()) // helper middleware to display JSON

// Middleware to setup session
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false,
  })
)

// Skyliing HTTP response header
app.use((req, res, next) => {
  res.header('X-Organization', 'Skyline')
  next()
})

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// Send all "/students" routes to student router only if the valid API is presented
app.get(`/students`, function(req, res, next) {
  const apiKey = req.query.key
  if (!apiKey || process.env.API_KEY !== apiKey) {
    // res.header('X-Organization', 'Skyline')
    res.status(401).send('401 Error: Unauthorized')
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