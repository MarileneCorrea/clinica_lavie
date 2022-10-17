const Pacientes = require("../models/Pacientes")  //<-- esta na pasta models

//lista todos o(a)s pacientes
//Caso a tabela tenha muitos registros 
//Coloque um limitador  no findAll({limit: 1000})
const pacientesController = { 

//lista todos o(a)s pacientes
//Caso a tabela tenha muitos registros 
//Coloque um limitador  no findAll({limit: 1000})
      async listaDePacientes(req, res) { 
            const listarPacientes = await Pacientes.findAll(); 
                 res.json(listarPacientes); 
      },

//Cadastra um novo item na tabela pacientes
    async createPacientes(req, res) { 
 
     //Deixe apenas campos nescessários 
     const { id_paciente, nome, email, idade, createdAt, updatedAt } = req.body;
 
     const newPacientes = await Pacientes.create({ 
           id_paciente, nome, email, idade, createdAt, updatedAt
     }); 
      res.status(201).json(newPacientes); //devolvendo o produto cadastrado
           },

//Exclui o item da tabela pacientes
//de acordo com parametro(req.params) fornecido
      async deletePacientes(req, res) { 
          const { id } = req.params;
             try { 
               await Pacientes.destroy({ 
                   where: {
                     id_paciente,
                   },
              });
                res.json(" Item deletado com sucesso!!")
            } catch (error) {
                return res.json("Registro não encontrado! " + error)
            }
},

//Atuliza o item da tabela pacientes
//de acordo com parametro(req.params) e os campos(req.body) fornecido 
      async updatePacientes(req, res) {
           const { id } = req.params;
           //Deixe apenas campos nescessários 
           const { nome, email, idade, createdAt, updatedAt } = req.body;
           try {
                 const pacientesAtualizado = await Pacientes.update({ 
                         nome, email, idade, createdAt, updatedAt
                  },
                  {
                     where: { 
                          id_paciente
                      },
                  }
                 );
                   res.json("Item atualizado com sucesso!!")
               }catch (error) {
                  return res.json("Registro não encontrado! " + error)
               }
       },

};
module.exports = pacientesController;