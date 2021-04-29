const express = require('express');
const router = express.Router();

router.use(require('./RentalRouter'));
router.use(require('./UserRouter'));




/*
Una forma alternativa de manejar
rutas publicas (sin proteger)
rutas privadas (protegidas por token)

es manejar 2 archivos de rutas como:
PublicRouter.js
PrivateRouter.js

e importarlas aca igual los otros routers:

router.use('require('./PublicRouter'));
router.use(verifyToken);
reouter.use(require('./PrivateRouter'));

*/

module.exports = router;
