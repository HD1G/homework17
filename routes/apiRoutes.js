const db = require("../models");

module.exports = function(app) {

  //find all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    });

  // adding exercise to workout
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, 
      {$push: {exercises: req.body}}).then(dbWorkout => {
      res.json(dbWorkout);
    })
  });
  
  //create workout
  app.post("/api/workouts", (req,res) => {
    db.Workout.create(req.body, (err, success) => {
      if (err) throw err;
      res.json(success);
    })
  });

  //get workouts in a range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7).then(dbWorkout => {
        res.json(dbWorkout);
    })
})
})

};