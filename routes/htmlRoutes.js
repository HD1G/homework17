const path = require("path");

// setting up html routes

module.exports = function(app) {
//index.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//exercise.html
app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})
//stats.html
app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})
}
