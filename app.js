const express = require('express')

const app = expres();

app.listen(3000);

app.get('/', (req, res) => {
    res.send('<h1>Teste</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Sobre</h1>')
})