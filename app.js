const express = require("express")
const app = express()
var methodOverride = require("method-override")
const path = require("path")
const con = require("./config/db.js")

// Using ejs template engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})

// parsing body request
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// include router
const biodataRouter = require("./routes/biodataRouter")
const adminRouter = require("./routes/adminRouter")

// routing
app.use("/biodata", biodataRouter)
app.use("/admin", adminRouter)

// starting server
app.listen(3000, function() {
  console.log("server listening on port 3000")
})
