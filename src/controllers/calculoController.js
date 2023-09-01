import incendio from "../models/Incendio.js";
import incendioController from "./incendioController.js"

class CalculoController {
    static calcular = async (req, res) => {
        try {
            const premioIncendio = await incendioController(req,res,incendio);
            console.log(`Premio Incendio Controller: ${premioIncendio}`)
            res.status(200).send('OK');
        } catch (error) {
            res.status(500).send(`Erro: ${error}`);
        }
    }
}

export default CalculoController;