const { Router } = require('express');
// Importar todos los routers;
const person = require('./person')
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/person',person)


module.exports = router; 