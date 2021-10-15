//импортируем Express and импортируем контроллер(в роуте пишем к нему путь)
import express from 'express'
import { AddNewExercise } from '../controllers/exercise/exerciseController.js'
import { protect } from '../middleware/authMiddleware.js'


//получаем роутер из экспресс
const router = express.Router() 

//связываем роутер и контроллер, продолжаем путь до роутера
router.route('/').post(protect, AddNewExercise)


export default router //экспортируем для импорта в проект
