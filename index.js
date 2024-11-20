/* EN CONCLUSION NODE PERMITE QUE EL SERVIDOR CORRA CODIGO JAVASCRIPT MANDA A DIFERENTES MODULOS A REALIZAR DIFERENTES TAREAS MIENTRAS SIGUE CORRIENDO EL CODIGO */
/* esto es una consulta a la base de datos (solo como ejemplo ya q8e no tiene implementacion)
const users = query('SELECT * FROM Users');
query('Select * FROM users',function(err,users){
    if(err){
        console.log(err)
    }
    if(users){
        console.log('tengo los usuarios')
    }
});*/
/*este modulo es para intereactuar con el sistema operativo ver caracteristicas del mismo
const os = require('os');
console.log(os.release());
console.log(os.cpus());
console.log(os.freemem());*/

/* ste modulo es para manejar ficheros del sistema leer crear etc
const fs = require('fs');
fs.writeFile('./text.txt','linea uno', function(err){
    if (err){
        console.log(err);
    }
    console.log('archivo creado');
});
console.log('ultima linea de codigo');
fs.readFile('./text.txt',function(err,datos){
    if(err){
        console.log(err);
    }
    console.log(datos.toString());
});*/
/*
const http = require('http');
const colors = require('colors');
http.createServer(function(request,respuesta){
    respuesta.writeHead(200,{'Content-type':'text/html'});
    respuesta.write('<h1 style="font-family:Arial;">Hola mundo desde nodejs<h1>');
    respuesta.end();
}).listen(3000);
console.log('hola verde'.green);*/
/*
TAMBIEN SE PUEDE GUARDAR LA FUNCION EN UNA CONSTANTE:
const manejadordelservidor = function(request,respuesta){
    respuesta.writeHead(200,{'Content-type':'text/html'});
    respuesta.write('<h1 style="font-family:Arial;">Hola mundo desde nodejs<h1>');
    respuesta.end();
}
Y SE MUESTRA DE LA SIG MANERA:
http.createServer(manejadordelservidor).listen(3000);
TAMBIEN PUEDO HACERLO DE LA SIG MANERA:
const server = http.createServer(manejadordelservidor);
Y SE MUESTRA DE LA SIG MANERA:
server.listen(3000,function(){
    console.log('servidor en puerto 3000');
});
ESTA FUNCION DENTRO DE LISTEN EJECUTA UNA ACCION EN ESTE CASO MUESTRA UN MENSAJER EN CONSOLA
 */
var express = require('express');

var server = express();

server.get('/',function(request,response){
    response.send('<h1>que dice perro</h1>');
    response.end();
});

const comprobar = function(){
    console.log('servidor iniciado');
}

server.listen(3000,comprobar);