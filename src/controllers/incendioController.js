import taxaRiscoUtil from "../util/taxaRiscoUtil.js";

const premioIncendio = (req,res,cobertura) => {
    let premio = 0;
    let taxaRisco = valorTaxaRisco(req,res,cobertura);
    premio = taxa;

    return premio;
}

const valorTaxaRisco = (req,res,cobertura) => {
    return taxaRiscoUtil(req,res,cobertura);
}

export default premioIncendio;