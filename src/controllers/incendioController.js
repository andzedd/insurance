import taxaRiscoUtil from "../util/taxaRiscoUtil.js";
import { taxaRiscoIncendio, premioRiscoIncendio } from "../models/Incendio.js"
import premioRiscoUtil from "../util/premioRiscoUtil.js";

const premioIncendio = async (req,res) => {
    let premio = 0;
    global.taxaRisco = await valorTaxaRisco(req,res,taxaRiscoIncendio);
    global.premioRisco = await valorPremioRisco(req,res,premioRiscoIncendio);
    premio = premioRisco;

    return premio;
}

const valorTaxaRisco = async (req,res,taxaRiscoIncendio) => {
    let taxaDeRisco = await taxaRiscoUtil(req,res,taxaRiscoIncendio);
    console.log(`Taxa de Risco: ${taxaDeRisco}`)
    return  taxaDeRisco;
}

const valorPremioRisco = async (req,res,premioRiscoIncendio) => {
    let premioDeRisco = await premioRiscoUtil(req,res,premioRiscoIncendio);
    let lmi = parseFloat(req.body.calculo.dadosOrcamento.idzmaxlimvlr01);
    console.log(`Premio de Risco: ${premioDeRisco * taxaRisco * lmi}`)
    return premioDeRisco
}



export default premioIncendio;