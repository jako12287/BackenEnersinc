const { Persons } = require('../db')



let getPersons = async()=>{

    let get = await Persons.findAll({})
    return get

}

let postPersons = async({names, lastnames, typedocument, document, Hobbies})=>{

    if(!names || !lastnames || !typedocument || !document || !Hobbies) return 'Faltan datos, todos los campos son necesarios'
    let post = await Persons.create(
        {
            names, 
            lastnames, 
            typedocument, 
            document, 
            Hobbies
        }
        )
    
    return 'Creacion exitosa'
}




module.exports = {
    getPersons,
    postPersons

}