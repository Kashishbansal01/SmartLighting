const mongoose = require('mongoose');

module.exports = mongoose.model('Security', new mongoose.Schema({
  name: String,
  floor: String,
  room: String,
  status: Boolean,
  sensorData: Array
}, { collection : 'security' }));