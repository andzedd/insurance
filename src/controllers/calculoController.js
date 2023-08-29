import incendio from "../models/Incendio.js";
import taxaRisco from "../util/taxaRisco.js";

class CalculoController {
    static calcular = async (req, res) => {
        try {
            const ajusteIncendio = await taxaRisco(req, res, incendio);
            console.log(ajusteIncendio); // Você também pode enviar isso como resposta se necessário
        } catch (error) {
            res.status(500).send(`Erro: ${error}`);
        }
    }
}

export default CalculoController;