//@desq  create new exerciseLog
//@route  POST /api/exercises/log
//@access Private

import asyncHandler from "express-async-handler"
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

    const prevExerciseLogs = await ExerciseLog.find({  //поиск предыдущей тренировки
        user: req.user._id,
     exercise: exerciseLog._id,
        }).sort('desc')  //сортировка по дате

    const prevExLog = prevExerciseLogs[0]

    const log = exerciseLog.toObject()

    const reBuildTimes = (log, prevExLog = null) =>{  //ставим значение предыдущей тренировки
        log.times.map((item, index) =>({
            ...item,
            prevWeight: prevExLog ? prevExLog.times.index.weight : 0, 
            prevRepeat: prevExLog ? prevExLog.times.index.repeat : 0 ,
        }))
    }
    let newTimes = reBuildTimes(log)

    if(prevExLog){
        newTimes = reBuildTimes(prevExLog)

        res.json({
            ...log,
            times: newTimes,
        })
    }

    res.json(exerciseLog)
})


//@desq   Get new exerciseLog
//@route  GET /api/exercises/log/:id
//@access Private
export const getExerciseLog = asyncHandler(async(req, res) => {
    const exerciseLog = await ExerciseLog.findById(req.params.id).populate('exercise', 'name imageId')  //получаем список по id(раскрыть exercise должны внутри)
    res.json(exerciseLog)  //выводим в инсомнии
})