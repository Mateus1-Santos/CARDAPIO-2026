const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'cantina_user',
    password: '1903',
    database: 'cantina_app'
});

connection.connect((err) =>{
    if(err){
        console.error('Erro ao conectar banco:', err)
    }else {
        console.log('Conectado ao MySQL com sucesso!')
    }
});

module.exports = connection;