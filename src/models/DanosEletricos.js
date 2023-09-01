import mongoose from "mongoose";

const danosEletricosSchema = new mongoose.Schema({
    id: {type: String}
}, {strict:false})

const taxaRiscoDanosEletricos = mongoose.model('taxariscodanoseletricos', danosEletricosSchema)
const premioRiscoDanosEletricos = mongoose.model('premioriscodanoseletricos', danosEletricosSchema)

module.exports = {
    taxaRiscoDanosEletricos,
    premioRiscoDanosEletricos
}