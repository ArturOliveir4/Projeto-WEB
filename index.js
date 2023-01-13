const express = require('express');
const server = express();
const path = require('path');

(async () => {
    const database = require('./db');
    const Perfil = require('./perfis');

    try {
        const resultado = await database.sync();
        console.log(resultado);


        const resultadoCreate = await Perfil.create({
            nome: 'luciano 6',
            sobrenome: 'alexandre',
            telefone: '99999999',
            bairro: 'bairro teste',
            rua: 'rua teste',
            cep: '5900000',
            estado: 'PB',
            email: 'luciano.silva@ifpb.edu.br',
            pais: 'BRASIL',
            login: 'luciano',
            senha: 'senha123'
        })

        const resultadoCreate2 = await Perfil.create({
            nome: 'luciano 5',
            sobrenome: 'alexandre',
            telefone: '99999999',
            bairro: 'bairro teste',
            rua: 'rua teste',
            cep: '5900000',
            estado: 'PB',
            email: 'luciano.silva@ifpb.edu.br',
            pais: 'BRASIL',
            login: 'luciano',
            senha: 'senha123'
        })

        console.log(resultadoCreate);
        console.log(resultadoCreate2);

    } catch (error) {
        console.log(error);
    }
})();

(async () => {
    const database = require('./db');
    const Perfil = require('./Categoria');

    try {
        const resultado = await database.sync();
        console.log(resultado);


        const resultadoCreate = await Perfil.create({
            nome: 'Decoração',
            descricao: 'Fundamentais para uma boa ambientação'
        })

        const resultadoCreate2 = await Perfil.create({
            nome: 'Eletrônicos',
            descricao: 'Essenciais para a vida moderna'
        })

        console.log(resultadoCreate);
        console.log(resultadoCreate2);

    } catch (error) {
        console.log(error);
    }
})();

(async () => {
    const database = require('./db');
    const Perfil = require('./Produto');

    try {
        const resultado = await database.sync();
        console.log(resultado);


        const resultadoCreate = await Perfil.create({
            nome: 'Teclado',
            categoria: 'Eletrônicos',
            descricao: 'Componente essencial para entrada de dados',
            categoria: 'Eletrônicos',
            preco: 90,
            desconto: 0,
            quantidade: 5,
            status: "Disponível",
            dataCadastro: "13/01/2022"

        })


        console.log(resultadoCreate);

    } catch (error) {
        console.log(error);
    }
})();


server.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\login.html'));
})

server.get('/registrar', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\registrar.html'));
})

server.get('/estoque', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\estoque.html'));
})

server.get('/esqueceuSenha', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\esqueceuSenha.html'));
})

server.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\perfil.html'));
})

server.get('/tarefas', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\tarefas.html'));
})

server.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\produtos.html'));
})

server.get('/categorias', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\categorias.html'));
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\index.html'));

})

server.get('/tarefas', (req, res) => {
    res.sendFile(path.join(__dirname + 'Projeto-WEB-main\tarefas.html'));

})

server.listen(3000)