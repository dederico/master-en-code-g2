const express = require('express');
const app = express(); // Aplicaion de API 
const PORT = process.env.PORT || 4020;

app.get('/prueba', (req, res) => {
    res.status(200).json({ message: 'success' })
});
app.use(require('./routers/UserRouter'));

app.listen(PORT, () => console.log("It's alive!"));

