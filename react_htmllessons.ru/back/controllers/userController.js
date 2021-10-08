// этот контроллер @desq получает user profile по адресу @route и нужно авторизоваться(private), чтобы его получить
//@desq Get api user profile
//@route(путь)  GET /api/users/profile
//@access Private(авторизованный пользователь   )


export const getUserProfile = (req, res) =>{
    const user = {
        name:'Nikita',
        age: 18
    }

    res.json(user) //ответ в формате json
}