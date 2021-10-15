//@desq   Add new workout
//@route  POST /api/users/workouts
//@access Private

import AsyncHandler from "express-async-handler"
import Workout from "../../models/workoutModel.js"

export const AddNewWorkout = AsyncHandler(async(req, res) => {
    const {name, exerciseIds} = req.body

    const workout = await Workout.create({
        name,
        exercises: exerciseIds,
    })

    res.json(workout)
})