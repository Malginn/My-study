//импортируем Express and импортируем контроллер(в роуте пишем к нему путь)
import express from 'express'
import { createNewExerciseLog } from '../controllers/exercise/logController.js'
import { createNewExercise } from '../controllers/exercise/mainController.js'
import { protect } from '../middleware/authMiddleware.js'
import { getExerciseLog } from '../controllers/exercise/logController.js'


//получаем роутер из экспресс
const router = express.Router() 

//связываем роутер и контроллер, продолжаем путь до роутера
router.route('/').post(protect, createNewExercise)
router.route('/log').post(protect, createNewExerciseLog)
router.route('/log/:id').get(protect, getExerciseLog)


export default router //экспортируем для импорта в проект
