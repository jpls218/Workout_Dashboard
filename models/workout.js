const Mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        
        {
            type: {
                type: String,
                trim: true,
                require: "Enter a exercise type",
            },       
        
        
            name: {
                type: String,
                trim: true,
                require: "Enter a exercise name",
            },
            duration: {
                
            }
        },
    ]
})


const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;