const express = require('express');
const server = express();
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./db');
const Perfil = require('./perfis');
const Categoria = require('./Categoria');
const Produto = require('./Produto');

const alert = require('alert');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

(async () => {

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

var createPerfil = {};
server.post('/salvarPerfil', async (req, res) => {
    const createPerfil = await Perfil.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        telefone: req.body.telefone,
        bairro: req.body.bairro,
        rua: req.body.rua,
        cep: req.body.cep,
        estado: req.body.estado,
        email: req.body.email,
        pais: req.body.pais,
        login: req.body.login,
        senha: req.body.senha
    });
    console.log(createPerfil);

    res.sendFile(path.join(__dirname + '/public/pages/index.html'));
})

var createProduto = {};
server.post('/salvarProduto', async (req, res) => {
    const createProduto = await Produto.create({
        nome: req.body.nome,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        preco: req.body.preco,
        desconto: req.body.desconto,
        quantidade: req.body.quantidade,
        status: req.body.status,
        dataCadastro: req.body.dataCadastro
    });
    console.log(createProduto);

    res.sendFile(path.join(__dirname + '/index.html'));
})

var createCategoria = {};
server.post('/salvarProduto', async (req, res) => {
    const createCategoria = await Categoria.create({
        nome: req.body.nome,
        descricao: req.body.descricao
    });
    console.log(createCategoria);

    res.sendFile(path.join(__dirname + '/index.html'));
})


server.post('/logar', async (req, res) => {
    const selectUsuario = await Perfil.findOne({
        where: {
            login: req.body.username,
            senha: req.body.password
        }
    });

    if (selectUsuario !== null) {
        res.sendFile(path.join(__dirname + '/index.html'));
    } else {
        alert("Login ou senha incorretos!");

        res.sendFile(path.join(__dirname + '/login.html'));
    }

})

server.get('/listarUsuarios', async (req, res) => {
    const usuarios = await Perfil.findAll();
    console.log(usuarios);
})

server.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/perfil.html'));
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/login.html'));
})

server.get('/tarefas', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/tarefas.html'));
})

server.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/perfil.html'));
})

server.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/home.html'));
})


server.listen(3000)