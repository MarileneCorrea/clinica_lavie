const db = require("../database/conexao"); //<-- Pasta do arquivo de conexão com a base de dados 
const { DataTypes } = require("sequelize");
 
 
const Atendimentos = db.define( 
     "Atendimentos", //Modelo da tabela
     { //Colunas da tabela
           id_atendimento: {
               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement: true,
           },
           data_atendimento: {
               type: DataTypes.DATE,
           },
           observacao: {
               type: DataTypes.STRING,
           },
           id_psicologo: {
               type: DataTypes.INTEGER,
               primaryKey: true,
           },
           id_paciente: {
               type: DataTypes.INTEGER,
               primaryKey: true,
           },
           createdAt: {
               type: DataTypes.DATE,
           },
           updatedAt: {
               type: DataTypes.DATE,
           },
     },
     { 
       tableName: "atendimentos",
     }
);
 
 
module.exports = Atendimentos;
//Verificar se a tabela possui chave estrangeira 
//informe o campo e modelo da tabela de referencia 
//Exemplo
//references: { 
//    model: model da tabela de referencia,
//    key: "Campo chave da tabela",
//},