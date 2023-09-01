import taxaRisco from "../util/taxaRisco.js";

const premioIncendio = (req,res,cobertura) => {
    let premio = 0;
    const taxa = taxaRisco(req,res,cobertura);
    premio = taxa;

    return premio;
}

export default premioIncendio;