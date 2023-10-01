const mongoose = require('mongoose');

module.exports = mongoose.model('Lighting', new mongoose.Schema({
  name: String,
  status: Boolean,
 
}, { collection : 'lighting' }));