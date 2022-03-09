const { Router } = require('express');
// Importar todos los routers;
const person = require('./person')
const register = require('./register')
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/person',person)
router.use('/register', register)

router.use((req, res)=>{
    res.status(404).send('La ruta no existe :(, rutas existentes = */person o */register')
})


module.exports = router; 