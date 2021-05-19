require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express(); // Aplicaion de API 
const PORT = 4020 || process.env.PORT ;

mongoose.connect(process.env.URL_DE_APP,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('db connection established'))
    .catch(() => console.log('error connecting'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/prueba', (req, res) => {
    res.status(200).json({ message: 'success' })
});
app.use(require('./routers/UserRouter'));

app.listen(PORT, () => console.log("It's alive!"));

