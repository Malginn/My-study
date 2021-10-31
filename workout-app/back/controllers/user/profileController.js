// этот контроллер @desq получает user profile по адресу @route и нужно авторизоваться(private), чтобы его получить
//@desq         Get user profile
//@route(путь)  GET /api/users/profile
//@access       Private(авторизованный пользователь   )

import asyncHandler from "express-async-handler"
import User from "../../models/userModel.js"

//ищем по id и выдаем пользователя get запрос, если его нет,то у нас middlware -> errorMiddleware.js
export const getUserProfile = asyncHandler(async(req, res) =>{
    const user = await User.findById(req.user._id) .select('-password')

    res.json(user)
})
    