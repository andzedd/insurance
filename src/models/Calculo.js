import mongoose from "mongoose";

const calculoSchema = new mongoose.Schema({
    id: {type: String},
    idzmaxlimvlr02: {type: Number},
    eqpmdl: {type: Number},
    eqpmrc: {type: Number},
    ajuste: {type: Number},
})

const calculo = mongoose.model('calculo', calculoSchema);

export default calculo;