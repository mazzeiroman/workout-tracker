const router = require("express").Router();
const db = require("../models")
console.log("api routes", db.Workout)

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(7)
      .then(dbWorkouts => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.post("/api/workouts", ({body}, res) => {
    console.log("post")
    db.Workout.create(body)
      .then(dbWorkout => {
        console.log("data frome post", dbWorkout)
        res.json(dbWorkout);
      })
      .catch(err => {
        console.log("error", err)
        res.json(err);
      });
  });

  router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.delete("/api/workouts", ({ body }, res) => {
    db.Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router;