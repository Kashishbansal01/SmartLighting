const mongoose = require('mongoose');

module.exports = mongoose.model('Floor_Room', new mongoose.Schema({
  floor:String,
  rooms: Array
}, { collection : 'fr' }));