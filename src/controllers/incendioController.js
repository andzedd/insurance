import taxaRiscoUtil from "../util/taxaRiscoUtil.js";

const premioIncendio = (req,res,cobertura) => {
    let premio = 0;
    const taxa = taxaRiscoUtil(req,res,cobertura);
    premio = taxa;

    return premio;
}

export default premioIncendio;