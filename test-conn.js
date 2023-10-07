const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cat_products'
})

let query_select = 'select * from categorias';
let query_inserir = 'insert into categorias (nome, qtd, valor) VALUES ("Mochila", 2, 50.00)';
let query_del = 'delete from categorias where id = 1'

connection.query(query_select, ( err, results, fields ) => {
    console.log(err, results, fields)
})