//Arquivo para inicializar o servidor
const express = require("express")
const routes = require("./routes/routes")
const db = require("./database/conexao")
 
 
const app = express();
 
 
db.hasConection();
 
 
app.use(express.json());
app.use(routes);
 
 
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
 
//Caso seu projeto não tenha instalado os pacotes execute os 
//comandos abaixo no terminal detro de sua pasta raiz do projeto 
//npm install sequelize mysql2 
//npm install express 
//npm install --save-dev nodemon 
 
// pode ser usado assim
//npm install sequelize mysql2 express --save-dev nodemon 