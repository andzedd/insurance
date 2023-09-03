import acharAjuste from "./acharAjusteUtil.js";

const premioRiscoUtil = async (req,res,camada) => {
    const premioRisco = await acharAjuste(req,res,camada);
    return premioRisco
}

export default premioRiscoUtil