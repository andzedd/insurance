import taxaRiscoUtil from "../util/taxaRiscoUtil.js";
import { taxaRiscoIncendio, premioRiscoIncendio } from "../models/Incendio.js"

const premioIncendio = (req,res) => {
    let premio = 0;
    let taxaRisco = valorTaxaRisco(req,res,taxaRiscoIncendio);
    premio = taxaRisco;

    return premio;
}

const valorTaxaRisco = (req,res,taxaRiscoIncendio) => {
    return taxaRiscoUtil(req,res,taxaRiscoIncendio);
}

export default premioIncendio;