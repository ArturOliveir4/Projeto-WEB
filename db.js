const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

const Usuario = sequelize.define('usuarios', {
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
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
});

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

const Categoria = sequelize.define('categorias', {
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
    descricao: {
        type: Sequelize.STRING,
    },

});

module.exports = sequelize;