const express = require('express');

const server = express();

server.get('/login', ()=>{
    console.log('Você está tentando acessar a página login');
})

server.get('/registrar', ()=>{
    console.log('Você está tentando acessar a página de registro');
})

server.get('/esqueceuSenha', ()=>{
    console.log('Você está tentando acessar a página de registro');
})

server.get('/index', ()=>{
    console.log('Você está tentando acessar a página de inicial');
})

server.get('/perfil', ()=>{
    console.log('Você está tentando acessar a página de perfil');
})

server.get('/tarefas', ()=>{
    console.log('Você está tentando acessar a página de tarefas');
})

server.get('/produtos', ()=>{
    console.log('Você está tentando acessar a página de produtos');
})

server.get('/categorias', ()=>{
    console.log('Você está tentando acessar a página de categorias');
})


server.listen(3000)