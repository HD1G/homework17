//required packages
const express = require("express");
const mongoose = require("mongoose");

//setup port
const PORT = process.env.PORT || 3030

// initializing the server
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//accesses public folder
app.use(express.static("public"));

// connects to mongoose DB or local server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true});

// routes
require("./routes/htmlRoutes")(app)
require("./routes/apiRoutes")(app)


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});