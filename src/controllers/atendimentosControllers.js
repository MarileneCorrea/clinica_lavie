const Atendimentos = require("../models/Atendimentos")  //<-- esta na pasta models

//lista todos o(a)s atendimentos
//Caso a tabela tenha muitos registros 
//Coloque um limitador  no findAll({limit: 1000})
const atendimentosController = { 

//lista todos o(a)s atendimentos
//Caso a tabela tenha muitos registros 
//Coloque um limitador  no findAll({limit: 1000})
      async listaDeAtendimentos(req, res) { 
            const listarAtendimentos = await Atendimentos.findAll(); 
                 res.json(listarAtendimentos); 
      },

//Cadastra um novo item na tabela atendimentos
    async createAtendimentos(req, res) { 
 
     //Deixe apenas campos nescessários 
     const { id_atendimento, data_atendimento, observacao, id_psicologo, id_paciente, createdAt, updatedAt } = req.body;
 
     const newAtendimentos = await Atendimentos.create({ 
           id_atendimento, data_atendimento, observacao, id_psicologo, id_paciente, createdAt, updatedAt
     }); 
      res.status(201).json(newAtendimentos); //devolvendo o produto cadastrado
           },

//Exclui o item da tabela atendimentos
//de acordo com parametro(req.params) fornecido
      async deleteAtendimentos(req, res) { 
          const { id } = req.params;
             try { 
               await Atendimentos.destroy({ 
                   where: {
                     id_atendimento,
                   },
              });
                res.json(" Item deletado com sucesso!!")
            } catch (error) {
                return res.json("Registro não encontrado! " + error)
            }
},

//Atuliza o item da tabela atendimentos
//de acordo com parametro(req.params) e os campos(req.body) fornecido 
      async updateAtendimentos(req, res) {
           const { id } = req.params;
           //Deixe apenas campos nescessários 
           const { data_atendimento, observacao, id_psicologo, id_paciente, createdAt, updatedAt } = req.body;
           try {
                 const atendimentosAtualizado = await Atendimentos.update({ 
                         data_atendimento, observacao, id_psicologo, id_paciente, createdAt, updatedAt
                  },
                  {
                     where: { 
                          id_atendimento
                      },
                  }
                 );
                   res.json("Item atualizado com sucesso!!")
               }catch (error) {
                  return res.json("Registro não encontrado! " + error)
               }
       },

};
module.exports = atendimentosController;