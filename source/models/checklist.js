const mongoose = require('mongoose');


// modelo a ser criado
const checklistSchema = mongoose.Schema({
  name: {type: String, required: true},
  // referĂȘncia
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

module.exports = mongoose.model('Checklist', checklistSchema);