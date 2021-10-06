//импортируем пакеты:экспресс библ, morgan для вывода запросов, цвета для консоли, dotenv Для продакшн
import express from 'express'
import morgan from 'express'
import colors from 'express'
import dotenv from 'express'
//Routes импортируем
import userRoutes from './routes/userRoutes.js'

//чтобы он заработал во всём проекте
dotenv.config()  

if(process.env.NODE_ENV === 'development') //чтобы morgan(вывод запросов в консоль) только в разработке
    app.use(morgan('dev'))

app.use(express,json())

app.use('api/users', userRoutes)  //подключаем poem

//для 
const PORT = process.env.PORT || 5000
app.listen(PORT,
     console.log(
         `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
     ) 
    )


