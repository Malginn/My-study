//импортируем и подключаем dotenv
import dotenv from 'dotenv'
dotenv.config()

//Config
import {connectDB} from './config/db.js'    
connectDB()

//импортируем и подлкчаем Express, пакет для цветной консоли, ИСПОЛЬЗУЕМ EXPRESS в формате JSON
import express from 'express'
import colors from 'colors'
const app = express() //заносим экспресс в переменную app
app.use(express.json()) //используем экспресс в формате json



//импортируем и подключаем morgan(вывод запросов в консоль(для продакшн)) !Только для разработки через файл .env
import morgan from 'morgan'
if(process.env.NODE_ENV === 'development')
    app.use(morgan('dev'))


//Routes    
import userRoutes from './routes/userRoutes.js' //импортирnpуем роут
app.use('/api/users', userRoutes)  //подключаем И ПИШЕМ ПУТЬ ДО РОУТА



//для запуска
const PORT = process.env.PORT || 5000
app.listen(PORT,
     console.log(
         `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
     ) 
    )


