//@desq   Add new exercise
//@route  POST /api/users/exercises
//@access Private

import asyncHandler from "express-async-handler"
import Exercise from "../../models/exerciseModel.js"

export const AddNewExercise = asyncHandler(async(req, res) => {
    const {name, times, image} = req.body //забираем три проперти из body() запрос в базу данных на создание упражнения

    const exercise = await Exercise.create({
        name,
        times,
        image
    })

    res.json(exercise)
})