const {Register} = require('../db')

const postRegister = async(username, email, password)=>{

    if(!username || !email || !password) return 'Todos los datos son necesarios'
    let veryfyEmail = await Register.findAll({where:{email}})
    if(veryfyEmail.length > 0) return 'El email ya esta registrado, inicia sesion'
    let veryfyUser = await Register.findAll({where:{username}})
    if(veryfyUser.length > 0) return 'El username ya esta registrado, utiliza otro'

    let register = Register.create({
        username,
        email,
        password
    })

    return 'Registro exitoso'

}


module.exports = {
    postRegister
}