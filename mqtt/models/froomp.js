const mongoose = require('mongoose');

module.exports = mongoose.model('FRoomP', new mongoose.Schema({
  floor:String,
  rooms: Array
}, { collection : 'froomp' }));