const db = require("../database/conexao"); //<-- Pasta do arquivo de conexão com a base de dados 
const { DataTypes } = require("sequelize");
 
 
const Psicologos = db.define( 
     "Psicologos", //Modelo da tabela
     { //Colunas da tabela
           id_psicologo: {
               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement: true,
           },
           nome: {
               type: DataTypes.STRING,
           },
           email: {
               type: DataTypes.STRING,
               primaryKey: true,
           },
           senha: {
               type: DataTypes.STRING,
           },
           apresentacao: {
               type: DataTypes.STRING,
           },
           createdAt: {
               type: DataTypes.DATE,
           },
           updatedAt: {
               type: DataTypes.DATE,
           },
     },
     { 
       tableName: "psicologos",
     }
);
 
 
module.exports = Psicologos;
//Verificar se a tabela possui chave estrangeira 
//informe o campo e modelo da tabela de referencia 
//Exemplo
//references: { 
//    model: model da tabela de referencia,
//    key: "Campo chave da tabela",
//},