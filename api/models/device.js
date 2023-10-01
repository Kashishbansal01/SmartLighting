const mongoose = require('mongoose');

module.exports = mongoose.model('Device', new mongoose.Schema({
  name: String,
  user: String,
  sensorData: Array,
  
}, { collection : 'topic4' }));