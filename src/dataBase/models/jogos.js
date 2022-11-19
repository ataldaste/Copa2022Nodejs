const mongoose = require('mongoose')

const jogosSchema = new mongoose.Schema({
    grupo: String,
    data: String,
    hora: String,
    time: String,
    adversario: String
    
})

module.exports = mongoose.model('jogos', jogosSchema)