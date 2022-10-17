const Psicologos = require("../models/Psicologos")  //<-- esta na pasta models

//lista todos o(a)s psicologos
//Caso a tabela tenha muitos registros 
//Coloque um limitador  no findAll({limit: 1000})
const psicologosController = { 

//lista todos o(a)s psicologos
//Caso a tabela tenha muitos registros 
//Coloque um limitador  no findAll({limit: 1000})
      async listaDePsicologos(req, res) { 
            const listarPsicologos = await Psicologos.findAll(); 
                 res.json(listarPsicologos); 
      },

//Cadastra um novo item na tabela psicologos
    async createPsicologos(req, res) { 
 
     //Deixe apenas campos nescessários 
     const { id_psicologo, nome, email, senha, apresentacao, createdAt, updatedAt } = req.body;
 
     const newPsicologos = await Psicologos.create({ 
           id_psicologo, nome, email, senha, apresentacao, createdAt, updatedAt
     }); 
      res.status(201).json(newPsicologos); //devolvendo o produto cadastrado
           },

//Exclui o item da tabela psicologos
//de acordo com parametro(req.params) fornecido
      async deletePsicologos(req, res) { 
          const { id } = req.params;
             try { 
               await Psicologos.destroy({ 
                   where: {
                     id_psicologo,
                   },
              });
                res.json(" Item deletado com sucesso!!")
            } catch (error) {
                return res.json("Registro não encontrado! " + error)
            }
},

//Atuliza o item da tabela psicologos
//de acordo com parametro(req.params) e os campos(req.body) fornecido 
      async updatePsicologos(req, res) {
           const { id } = req.params;
           //Deixe apenas campos nescessários 
           const { nome, email, senha, apresentacao, createdAt, updatedAt } = req.body;
           try {
                 const psicologosAtualizado = await Psicologos.update({ 
                         nome, email, senha, apresentacao, createdAt, updatedAt
                  },
                  {
                     where: { 
                          id_psicologo
                      },
                  }
                 );
                   res.json("Item atualizado com sucesso!!")
               }catch (error) {
                  return res.json("Registro não encontrado! " + error)
               }
       },

};
module.exports = psicologosController;