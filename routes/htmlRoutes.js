var path = require("path");

module.exports = function(app) {
  // Called when "Countinue Workout" or "new Workout" is clicked in index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
  });
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"));
  });

  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/stats.html"));
  });
};