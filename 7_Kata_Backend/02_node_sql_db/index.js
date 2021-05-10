require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { errors } = require('celebrate');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
body
{
    "nombre":"Federico",
    "ocupacion":"Estudiante",
}
*/
const { showTime } = require('./middlewares');
const { verifyToken } = require('./middlewares');

// despues de la ruta agregamos el metodo

app.get('/', (req, res) => res.status(200).json({ message: "hola mundo" }));

app.use('/api/v1', require('./routers'));
app.use(errors());
console.log('Entorno', process.env.NODE_ENV);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));