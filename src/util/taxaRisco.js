import acharAjuste from "./acharAjuste.js"

const taxaRisco = async (req,res,camada) => {
    const taxaRisco = await acharAjuste(req,res,camada);
    console.log(`Taxa de Risco: ${taxaRisco}`)
    return taxaRisco
};

export default taxaRisco