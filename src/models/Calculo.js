import mongoose from "mongoose";

const calculoSchema = new mongoose.Schema({
    lmi01:      {type: Number},
    lmi02:      {type: Number},
    lmi03:      {type: Number},
    marca:      {type: String},
    modelo:     {type: String},
    valor:      {type: Number}
})

const calculo = mongoose.model('calculo', calculoSchema);

export default calculo;