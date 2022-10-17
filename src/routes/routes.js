const express = require("express")
 
const atendimentosControllers = require("../controllers/atendimentosControllers")
const pacientesControllers = require("../controllers/pacientesControllers")
const psicologosControllers = require("../controllers/psicologosControllers")
 
const routes = express.Router();
 
//Rotas da tabela atendimentos
routes.get("/atendimentos", atendimentosControllers.listaDeAtendimentos);
routes.post("/atendimentos", atendimentosControllers.createAtendimentos);
routes.put("/atendimentos/:id", atendimentosControllers.updateAtendimentos);
routes.delete("/atendimentos/:id", atendimentosControllers.deleteAtendimentos);

//Rotas da tabela pacientes
routes.get("/pacientes", pacientesControllers.listaDePacientes);
routes.post("/pacientes", pacientesControllers.createPacientes);
routes.put("/pacientes/:id", pacientesControllers.updatePacientes);
routes.delete("/pacientes/:id", pacientesControllers.deletePacientes);

//Rotas da tabela psicologos
routes.get("/psicologos", psicologosControllers.listaDePsicologos);
routes.post("/psicologos", psicologosControllers.createPsicologos);
routes.put("/psicologos/:id", psicologosControllers.updatePsicologos);
routes.delete("/psicologos/:id", psicologosControllers.deletePsicologos);

module.exports = routes;