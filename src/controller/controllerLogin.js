const res = require('express/lib/response')
const {Register} = require('../db')


let postLogin = async(username, password)=>{

    console.log(username)
    if(!username || !password) return 'Faltan campos por llenar'
    let MisingUser = await Register.findOne({where:{username}})
    let MisingPass = await Register.findOne({where:{password}})
    
    if(!(MisingUser && MisingPass)){ 
        return 'credenciales no validas'
    }else{
          let user = {
              id:MisingUser.id,
              username:MisingUser.username,
              password:MisingUser.password
          }
      

        return user


    }

}

module.exports = {
    postLogin
}