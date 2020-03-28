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
        Workout.find({}).then(workoutDb => {
            res.json(workoutDb);

        }).catch(err => {
            res.json(err);
        });
    });

    
}
