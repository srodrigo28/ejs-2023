const express = require('express')

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<h1>Teste</h1>')
    res.sendFile('./views/home.html', { root: __dirname})
})

app.get('/about', (req, res) => {
    res.send('<h1>Sobre</h1>')
})