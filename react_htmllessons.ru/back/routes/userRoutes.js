//импортируем Express and импортируем контроллер(в роуте пишем к нему путь)
import express from 'express'
import { getUserProfile } from '../controllers/userController.js' //импортировали контроллер


//получаем роутер из экспресс
const router = express.Router() 

//связываем роутер и контроллер, продолжаем путь до роутера
router.route('/profile').get(getUserProfile)  


export default router //экспортируем для импорта в проект

