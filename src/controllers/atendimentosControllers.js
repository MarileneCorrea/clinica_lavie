const Atendimentos = require("../models/Atendimentos") //<-- esta na pasta models


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
    const {
      data_atendimento,
      observacao,
      id_psicologo,
      id_paciente
    } = req.body;

    const newAtendimentos = await Atendimentos.create({
      data_atendimento,
      observacao,
      id_psicologo,
      id_paciente,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.status(201).json(newAtendimentos); //devolvendo o produto cadastrado
  },


  //Exclui o item da tabela atendimentos
  //de acordo com parametro(req.params) fornecido
  async deleteAtendimentos(req, res) {
    const {
      id
    } = req.params;
    try {
      await Atendimentos.destroy({
        where: {
          id_atendimento: id
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
    const {
      id
    } = req.params;
    //Deixe apenas campos nescessários 
    const {
      data_atendimento,
      observacao,
      id_psicologo,
      id_paciente,
    } = req.body;
    try {
      const atendimentosAtualizado = await Atendimentos.update({
        data_atendimento,
        observacao,
        id_psicologo,
        id_paciente,
        updatedAt: new Date()
      }, {
        where: {
          id_atendimento: id
        },
      });
      res.json("Item atualizado com sucesso!!")
    } catch (error) {
      return res.json("Registro não encontrado! " + error)
    }
  },


};
module.exports = atendimentosController;