const mongoose = require('mongoose');

module.exports = mongoose.model('Lighting', new mongoose.Schema({
  name: String,
  floor: String,
  room: String,
  status: Boolean,
  sensorData: Array
}, { collection : 'lighting' }));