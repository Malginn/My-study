import express from 'express'
import { getUserProfile } from '../controllers/userController.js' //импортировали контроллер

const router = express.Router()  //получаем роутер из экспресс??
router.route('/profile').get(getUserProfile)  //связываем роутер и контроллер

export default router

