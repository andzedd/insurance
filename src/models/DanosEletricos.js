import mongoose from "mongoose";

const danosEletricosSchema = new mongoose.Schema({
    id: {type: String}
}, {strict:false})

const danosEletricos = mongoose.model('taxaRiscoDanosEletricos', danosEletricosSchema)

export default danosEletricos