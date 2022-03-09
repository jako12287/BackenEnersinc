
const express = require('express')
const login = express.Router()
login.use(express.json())
const jwt = require("jsonwebtoken")

const { postLogin } = require('../controller/controllerLogin')

login.post('/', async(req, res)=>{
    const {username, password} = req.body
    let login = await postLogin(username, password)
    if(login === 'credenciales no validas') res.send(login)

    let user = {username, password}

    jwt.sign(user, 'shhhss',(err, token)=>{
        
        res.json(
            {
                username: user.username,
                password: user.password, 
                token
            }
            )
    })

    
})


module.exports = login
