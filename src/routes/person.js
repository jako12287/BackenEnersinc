const express = require('express')
const res = require('express/lib/response')
const jwt = require('jsonwebtoken')
const person = express.Router()
const  verifyTokken  = require('../middleware/verificationTokken')
person.use(express.json())
const { getPersons, postPersons, putPersons, deletePersons } = require('../controller/controllerPerson')

person.get('/', verifyTokken, async(req, res)=>{
    let get = await getPersons()
    jwt.verify(req.token, 'shhhss', (error, authData)=>{
        if(error){
            res.sendStatus(403)
        }else{

        
            res.send(get)
        }

    })

})

person.post('/', verifyTokken, async(req, res)=>{

    const {
            names, 
            lastnames, 
            typedocument, 
            document, 
            Hobbies
        } = req.body

    let post = await postPersons({names, lastnames, typedocument, document, Hobbies})

    jwt.verify(req.token, 'shhhss', (error, authData)=>{
        if(error){
            res.sendStatus(403)
        }else{

        
            res.send(post)
        }

    })


})

person.put('/:id', verifyTokken, async(req, res)=>{
    const {
        names, 
        lastnames, 
        typedocument, 
        document, 
        Hobbies
    } = req.body
    const {id} = req.params

    let put = await putPersons({id, names, lastnames, typedocument, document, Hobbies})

    jwt.verify(req.token, 'shhhss', (error, authData)=>{
        if(error){
            res.sendStatus(403)
        }else{

        
            res.send(put)
        }

    })
   

})

person.delete('/:id', verifyTokken, async(req, res)=>{
    const {id} = req.params

    let delet = await deletePersons({id})

    jwt.verify(req.token, 'shhhss', (error, authData)=>{
        if(error){
            res.sendStatus(403)
        }else{

            res.send(delet)
        
        }

    })


    

})


module.exports = person;