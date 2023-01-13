const Sequelize = require('sequelize');
const database = require("../db");

const Produto = sequelize.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        
    },
    descricao: {
        type: Sequelize.STRING,
    },
    preco: {
        type: Sequelize.DOUBLE,
        
    },
    desconto: {
        type: Sequelize.DOUBLE,
        
    },
    quantidade: {
        type: Sequelize.STRING,
        
    },
    status: {
        type: Sequelize.STRING,
        
    },
    dataCadastro: {
        type: Sequelize.DATE,
        
    },
});


module.exports = Produto;