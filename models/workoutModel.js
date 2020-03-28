const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wktSchema = new Schema({
    day: { 
        type: Date,
        default: Date.now 
    },
    exercises:[{
        type: {
            type: String,
            trim: true,
            required: 'The type cannot be null.'
        },
        name: {
            type: String,
            trim: true,
            required: 'The type cannot be null.'
        },
        distance: Number,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }]
});


const Workout = mongoose.model("Workout", wktSchema);

module.exports = Workout;