const Sequelize = require("sequelize");
 
// Constantes para conexão com a base de dados
const DB_NAME = "clinica_lavie";
const DB_USER = "root";
const DB_PASS = "12345";
 
// Objetos com configurações para conexão
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};
 
 
// Objeto para guardar a conexão do banco dados
let db = {};
try {
   db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
}catch (error) {
   console.error("Error ao tentar uma conexão com banco dados");
}
// Metodo de teste do sequelize para teste 
// de conexão com a base de dados 
async function hasConection() {
  try {
     await db.authenticate();
     console.log("Banco de dados conectado com sucesso!");
  }catch (error) {
     console.error("Erro ao tentar se conectar ao banco de dados");
  }
}
 
 
Object.assign(db, {
   hasConection,
});
 
 
module.exports = db;
 
 