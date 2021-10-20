//@desq   create new workout
//@route  POST /api/users/workouts
//@access Private

import AsyncHandler from "express-async-handler"
import Workout from "../../models/workoutModel.js"

export const createNewWorkout = AsyncHandler(async(req, res) => {
    const {name, exerciseIds} = req.body

    const workout = await Workout.create({
        name,
        exercises: exerciseIds,
    })

    res.json(workout)
})


//@desq   Get workout
//@route  GET /api/workouts/:id
//@access Private

export const getWorkout = AsyncHandler(async(req, res) => {
    const workout = await Workout.findById(req.params.id)
    .populate('exercises') //чтобы раскрылось содержимое внутри workout exercises ИНАЧЕ выведется id упражнений
    .lean()  //метод который добавил minutes в тренировку(внутри объекта)

    const minutes = Math.ceil(workout.exercises.length * 3.75)  //примерное время тренировки

    res.json({ ...workout, minutes}) //выводим правильно тренировку с минутами
})

