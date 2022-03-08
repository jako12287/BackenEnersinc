const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = 3000;



// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`); // eslint-disable-line no-console
  });
});




// const express = require('express');
// const app = express();
// const PORT = 3000;
// const CORS = require('cors')
// //middleware
// app.use(express.json());
// app.use(CORS())
// //middleware


// app.get('/',(req, res)=>{
//     res.send('API')
// })


// app.use((req, res)=>{
//     res.status(404).send('La ruta no existe')
// })


// app.listen(PORT,()=>{
//     console.log(`Listen in port ${PORT}`)
// })



