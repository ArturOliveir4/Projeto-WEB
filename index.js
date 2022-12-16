const express = require('express');

const server = express();

const path = require('path');

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\login.html'));
})

server.get('/registrar', (req, res)=>{
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\registrar.html'));
})

server.get('/estoque', (req, res)=>{
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\estoque.html'));
})

server.get('/esqueceuSenha', (req, res)=>{
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\esqueceuSenha.html'));
})

server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\perfil.html'));
})

server.get('/tarefas', (req, res)=>{
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\tarefas.html'));
})

server.get('/produtos', (req, res)=>{
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\produtos.html'));
})

server.get('/categorias', (req, res)=>{
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\categorias.html'));
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\index.html'));

})

server.get('/tarefas', (req, res) =>{
    res.sendFile(path.join(__dirname+'Projeto-WEB-main\tarefas.html'));

})

server.listen(3000)