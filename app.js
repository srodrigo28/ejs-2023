const express = require('express')

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<h1>Teste</h1>')
    res.status(502).redirect('./views/home.html', { root: __dirname})
})
app.get('/home', (req, res) => {
    //res.send('<h1>Teste</h1>')
    res.status(200).sendFile('./views/home.html', { root: __dirname})
})
app.get('/about', (req, res) => {
    //res.send('<h1>Teste</h1>')
    res.status(200).sendFile('./views/about.html', { root: __dirname})
})
app.get('/service', (req, res) => {
    //res.send('<h1>Teste</h1>')
    res.status(200).sendFile('./views/service.html', { root: __dirname})
})
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname})
    //res.redirect('./views/service.html', { root: __dirname})
})