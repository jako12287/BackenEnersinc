const express = require('express')
const res = require('express/lib/response')
const person = express.Router()
person.use(express.json())
const { getPersons, postPersons } = require('../controller/controllerPerson')

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

// name.get('/', async(req, res)=>{
//     try {
//         let getDB = await Names.findAll({})
//         if(!getDB.length){
//             res.send('No hay nombres aun')
//         }else{

//             res.send(getDB)
//         }
       
        
//     } catch (err) {
//         res.status(500).send(`Upps Internal Server Error`)
//     }
// })

// name.post('/', async(req, res)=>{
//     try {
//         const {name} = req.body

//         let postDB = await Names.create({
//             name,
//         })
//         res.send(`exito al guardar en la BD ${postDB}`) 
        
//     } catch (error) {
//         console.error(error)
        
//     }
// })


module.exports = person;