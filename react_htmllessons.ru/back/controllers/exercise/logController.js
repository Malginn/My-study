//@desq  create new exerciseLog
//@route  POST /api/exercises/log
//@access Private

import asyncHandler from "express-async-handler"
import { reBuildTimes } from "../../helpers/exerciseLog.js"
import ExerciseLog from "../../models/exerciseLogModel.js"

export const createNewExerciseLog = asyncHandler(async(req, res) => {
    //ПРИХОДИТ ИЗ ИНСОМНИИ
    const {exerciseId, times } = req.body //забираем три проперти из body() запрос в базу данных на создание упражнения

    let timesArray = [] //упражнения


//TODO: getExerciseLog куда перенести?

        for(let i = 0;i < times; i++){ //добавляем упражнения и дефолтные значения
            timesArray.push({
                weight:0,
                repeat:0
            })
        }        
    

    const exerciseLog = await ExerciseLog.create({ //создаем список для пользователя с упражнениями и повторениями с весом
        user: req.user._id,
        exercise: exerciseId,
        times: timesArray
    })


    res.json(exerciseLog)
})





//@desq   Get new exerciseLog
//@route  GET /api/exercises/log/:id
//@access Private
export const getExerciseLog = asyncHandler(async(req, res) => {
    const exerciseLog = await ExerciseLog.findById(req.params.id)
    .populate('exercise','name imageId')
    .lean()//делаем из этого объект? вместо потом  exerciseLog.toObject //получаем список по id(раскрыть exercise должны внутри)


    const prevExerciseLogs = await ExerciseLog.find({  //поиск предыдущей тренировки
        user: req.user._id,
        exercise: exerciseLog._id,
        }) .sort('desc')  //сортировка по дате

    const prevExLog = prevExerciseLogs[0]
    // const log = exerciseLog.toObject()

    let newTimes = reBuildTimes(exerciseLog)  //новые подходы

    if(prevExLog) newTimes = reBuildTimes(exerciseLog, prevExLog)


    res.json({
        ...exerciseLog,
        times: newTimes,
    })
    
})


