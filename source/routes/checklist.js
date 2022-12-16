const express = require('express');

const router = express.Router(); //premite criar rotas

const Checklist = require('../models/checklist');

/*
router.get('/', (req, res) => {
  console.log('Conferindo');
  res.send();
})
*/

// para listar dados do Model
router.get('/', async (req, res) => {
  try{
    let checklists = await Checklist.find({});
    res.status(200).json(checklists);
  }catch (error){
    res.status(500).json(error);
  }
})


// criando uma rota com o post
/*
router.post('/', (req, res) => {
  let { name } = req.body
  console.log(name)
  // ou
  // console.log(req.body["name"]);
  res.status(200).send(req.body);
})
*/
router.post('/', async (req, res) => {
  let { name } = req.body

  // criando uma Checklist
  try{
    let checklist = await Checklist.create({ name })
    res.status(200).json(checklist);
  }catch (error){
    res.status(422).json(error)
  }
})

/*
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`ID: ${req.params.id}`);
})
*/
// para listar dados do Model
router.get('/:id', async (req, res) => {
  try{
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).json(checklist);
  }catch(error){
    res.status(422).json(error);
  }
})

/*
router.put('/:id', (req, res) => {
  console.log(req.body);
  res.send(`put ID: ${req.params.id}`);
})
*/
// para atualizar dados
router.put ('/:id', async(req, res) => {
  let {name} = req.body;
  try{
    let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true}); // {name} == o que será alterado, {new:true} == novo conteúdo
    res.status(200).json(checklist)
  }catch (error){
    res.status(422).json(error);
  }
})

/*
router.delete('/:id', (req, res) => {
  console.log(req.body);
  res.send(`delete ID: ${req.params.id}`);
})
*/
// para deletar dados
router.delete ('/:id', async (req, res) => {
  try{
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.status(200).json(checklist);
  }catch(error){
    res.status(422).json(error);
  }
})

module.exports = router; // premite exportar o módulo que foi criado