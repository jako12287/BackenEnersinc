const express = require('express')
const res = require('express/lib/response')
const person = express.Router()
person.use(express.json())
const { getPersons, postPersons, putPersons, deletePersons } = require('../controller/controllerPerson')

person.get('/',async(req, res)=>{

    let get = await getPersons()

    res.send(get)

})

person.post('/', async(req, res)=>{

    const {
            names, 
            lastnames, 
            typedocument, 
            document, 
            Hobbies
        } = req.body

    let post = await postPersons({names, lastnames, typedocument, document, Hobbies})

    res.send(post)

})

person.put('/:id', async(req, res)=>{
    const {
        names, 
        lastnames, 
        typedocument, 
        document, 
        Hobbies
    } = req.body
    const {id} = req.params

    let put = await putPersons({id, names, lastnames, typedocument, document, Hobbies})
   
    res.send(put)

})

person.delete('/:id', async(req, res)=>{
    const {id} = req.params

    let delet = await deletePersons({id})
    
    res.send(delet)

})


module.exports = person;