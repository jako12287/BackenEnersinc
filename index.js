const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const jwt = require('jsonwebtoken')
const PORT = 3000;



// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`); // eslint-disable-line no-console
  });
});











