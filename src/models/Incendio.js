import mongoose from "mongoose";

const incendioSchema = new mongoose.Schema({
    id: {type: String}
}, {strict:false})

const taxaRiscoIncendio = mongoose.model('taxariscoincendio', incendioSchema)
const premioRiscoIncendio = mongoose.model('premioriscoincendio', incendioSchema)

export { taxaRiscoIncendio, premioRiscoIncendio }