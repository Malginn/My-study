//импортируем Express and импортируем контроллер(в роуте пишем к нему путь)
import express from 'express'
import { getUserProfile } from '../controllers/user/profileController.js' //импортировали контроллер
import { regUser } from '../controllers/user/regController.js'


//получаем роутер из экспресс
const router = express.Router() 

//связываем роутер и контроллер, продолжаем путь до роутера
router.route('/profile').get(getUserProfile)  
router.route('/').post(regUser)  


export default router //экспортируем для импорта в проект

