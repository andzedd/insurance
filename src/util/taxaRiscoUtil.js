import acharAjuste from "./acharAjusteUtil.js"

const taxaRiscoUtil = async (req,res,camada) => {
    const taxaRisco = await acharAjuste(req,res,camada);
    return taxaRisco
};

export default taxaRiscoUtil