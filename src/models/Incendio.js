import mongoose from "mongoose";

const incendioSchema = new mongoose.Schema({
    id: {type: String},
    idzmaxlimvlr01: {type:String},
    eqpmrc: {type: String},
    eqpmdl: {type: String}
}, {strict:false})

const incendio = mongoose.model('taxaRiscoIncendio', incendioSchema)

export default incendio