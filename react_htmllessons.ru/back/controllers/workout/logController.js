//@desq  create new workoutLog
//@route  POST /api/workouts/log
//@access Private

import asyncHandler from "express-async-handler"
import WorkoutLog from "../../models/workoutLogModel.js"

export const createNewWorkoutLog = asyncHandler(async(req, res) => {
    
    const {workoutId } = req.body  
    
    const workoutLog = await WorkoutLog.create({
        user: req.user._id,
        workout: workoutId
    })

    res.json(workoutLog)
})



