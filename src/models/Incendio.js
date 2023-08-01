import mongoose from "mongoose";

const incendioSchema = new mongoose.Schema({
    id: {type: String}
}, {strict:false})

const incendio = mongoose.model('taxaRiscoIncendio', incendioSchema)

export default incendio