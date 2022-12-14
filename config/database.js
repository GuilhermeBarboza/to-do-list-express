const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// para conectar ao mongoDB
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://0.0.0.0/to-do-list', {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error(err));