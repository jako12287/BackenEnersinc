const res = require("express/lib/response");
const { Persons } = require("../db");

let getPersons = async () => {
    try {
        let get = await Persons.findAll({});
      
        if (get.length === 0) return "Aun no se ha creado ningun registro";
      
        return get;
        
    } catch (err) {
        console.error(err)
    }
};

let postPersons = async ({
  names,
  lastnames,
  typedocument,
  document,
  Hobbies,
}) => {
    try {

        let get = await Persons.findAll({where:{document}})
        if (get.length > 0) return res.sendStatus(406)
        if (!names || !lastnames || !typedocument || !document || !Hobbies)
          return "Faltan datos, todos los campos son necesarios";
      
        let post = await Persons.create({
          names,
          lastnames,
          typedocument,
          document,
          Hobbies,
        });
      
        return "Creacion exitosa";
        
    } catch (err) {
        console.error(err)
    }

};

let putPersons = async({
    id,
    names,
    lastnames,
    typedocument,
    document,
    Hobbies,
  })=>{

    try {
        if (!names || !lastnames || !typedocument || !document || !Hobbies)
        return "Faltan datos, todos los campos son necesarios";
    
      let put = await Persons.update({
        names,
        lastnames,
        typedocument,
        document,
        Hobbies,
      },{where:{id:id}});
    
      return "El cambio de informacion fue exitoso";
        
    } catch (err) {
        console.error(err)
    }


}

let deletePersons = async({id})=>{
    try {
        let delet = await Persons.destroy({
            where:{id}
        })
    
        console.log('esto es delete',delet)
    
        return `Registro con id ${id} fue eliminado`
        
    } catch (err) {
        console.error(err)
    }



}

module.exports = {
  getPersons,
  postPersons,
  putPersons,
  deletePersons
};
