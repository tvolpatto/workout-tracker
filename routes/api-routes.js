const Workout = require("../models/workoutModel.js")
const router = require("express").Router();

module.exports = function (app) {

    app.post("/api/workouts", function (req, res) {
        Workout.create({}).then(workoutDb => {
            res.json(workoutDb);

        }).catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts", (req, res) => {
        getAllWorkouts(req, res);
    });

    app.get("/api/workouts/range", (req, res) => {
        getAllWorkouts(req, res);
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            {
                _id: req.params.id,
            },{
                $push: {
                    exercises: req.body
                }
            }).then(workoutDb => {
                res.json(workoutDb);
        }).catch(err => {
                res.json(err);
        });
    });
}

function getAllWorkouts(req, res) {
    Workout.find({}).then(workoutDb => {
        console.log(workoutDb);
        res.json(workoutDb);

    }).catch(err => {
        res.json(err);
    });
}
