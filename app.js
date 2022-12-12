const express = require('express');
const checklistRouter = require('./source/routes/checklist'); // importando
const app = express();

// middleware
app.use(express.json()); // verifica se ao fazer uma chamada há algum json presente e se deve ser processado e deixar disponível no boby

// '/checklists' == todas as rotas que estão no checklistRouter serão derivadas do termo anterior
app.use('/checklists',checklistRouter); // usando como se fosse um Middleware

/*
const log = (req, res, next) => {
  console.log(req.body);
  console.log(`Data: ${Date.now()}`);
  next(); // passa a responsabilidade para o próximo middleware
}
app.use(log);

// criando rota
app.get('/', (req,res) => {
  res.send('<h1>Minha lista de tarefas</h1>'); // res.send == resposta enviada ao usuário
})

// criando rota
app.get('/json', (req, res) => {
  console.log(req.body);
  res.json({title: 'Tarefa X', done: true}); 
}) // dentro do res.json a informação precisa ser passado dentro de chaves, pois se trata de um objeto
*/


app.listen(3000, () => { // ficará ouvindo a porta 3000
  console.log('Servidor inicializado'); 
})

/* no terminal
npm install nodemon --save-dev
npx nodemon
*/

// utilizando o nodemon
// no terminal: npx nodemon
// colocando no script do package.json "dev": "nodemon"
// no terminal: npm run dev