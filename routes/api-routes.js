const router = require("express").Router();
const Workout = require("../public/workout.js")
console.log("api routes", Workout)

router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .limit(7)
      .then(dbWorkouts => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
module.exports = router;