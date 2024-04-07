//Configurar con expressJs

const express = require('express');

const app = express();

app.set('port', 3000);
app.listen(3000);

//Llamar al componente sql

var mysql = require('mysql');


//parametros de conexion

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'user123',
    database: 'base_001'
})



//conexion

conexion.connect();

//DML

conexion.query('insert into clientes values(1,"nombre1",1,"Cr-05",12345)', function (error, resultado) {
    if (error) throw error
    console.log(resultado)
})

//SQL Consultas

conexion.query('select * from clientes', function (error, filas) {
    if (error) throw error
    console.log(filas)
})

//DML

conexion.query('uptade clientes set direccion = "no tiene" where idCliente = 1', function (error, resultado) {
    if (error) throw error
    console.log(resultado)
})

//SQL Consultas

conexion.query('select * from clientes', function (error, filas) {
    if (error) throw error
    console.log(filas)
})


//DML

conexion.query('delete from clientes where idCliente = 1'), function (error, resultado) {
    if (error) throw error
    console.log(resultado)
}

//SQL Consultas

conexion.query('select * from clientes', function (error, filas) {
    if (error) throw error
    console.log(filas)
})

//Cerra conecion
conexion.end();

