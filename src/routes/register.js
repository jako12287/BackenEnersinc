const express = require('express')
const res = require('express/lib/response')
const register = express.Router()
const { postRegister } = require('../controller/controllerRegister') 
register.use(express.json())



register.post('/', async(req, res)=>{

    const {username, email, password} = req.body

    console.log('username es',email)
    
    let post = await postRegister(username, email, password)

    res.send(post)

})

module.exports = register