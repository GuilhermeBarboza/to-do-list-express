const express = require('express');

const router = express.Router(); //premite criar rotas

router.get('/', (req, res) => {
  console.log('Conferindo');
  res.send();
})

// criando uma rota com o post
router.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`ID: ${req.params.id}`);
})

router.put('/:id', (req, res) => {
  console.log(req.body);
  res.send(`put ID: ${req.params.id}`);
})

router.delete('/:id', (req, res) => {
  console.log(req.body);
  res.send(`delete ID: ${req.params.id}`);
})

module.exports = router; // premite exportar o módulo que foi criado