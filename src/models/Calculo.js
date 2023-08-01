import mongoose from "mongoose";

const calculoSchema = new mongoose.Schema({
    id: {type: String},
    idzmaxlimvlr02: {type: Number},
    eqpmdl: {type: Number},
    eqpmrc: {type: Number},
    ajuste: {type: Number},
},{ strict: false })

const danosMoraisSchema = new mongoose.Schema({
    lmi: {type: Number}
}, {strict: false})

const calculo = mongoose.model('calculo', calculoSchema);

const taxaRiscoDanosMorais = mongoose.model('taxaRiscoDanosMorais', danosMoraisSchema)

export default calculo