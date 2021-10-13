import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
//@desq Register user
//@route(путь)  POST /api/users/
//@access Public
//npm i express-async-handler(обработчик ошибок

//пишем запрос на регистрацию(получает(req) мэил и пароль и смотрит если в базе
export const regUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body

//проверка в базе
    const isHaveUser =await  User.findOne({ email })  

    //если есть, вывод ошибки
    if(isHaveUser){
        res.status(400)
        //создадим новую ошибку
        throw new Error('Данный пользователь уже зарегистрирован')
    }

    //создание email and password для userShema
    const user = await User.create({
        email, password,    
    })

    //Create token

    res.json(user)
})