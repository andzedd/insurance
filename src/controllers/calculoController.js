import incendio from "../models/Incendio.js";
import taxaRisco from "../util/taxaRisco.js";

class CalculoController {
    static calcular = async (req, res) => {
        try {
            const taxaRiscoIncendio = await taxaRisco(req,res,incendio);
            res.status(200).send('OK');
        } catch (error) {
            res.status(500).send(`Erro: ${error}`);
        }
    }
}

export default CalculoController;