import calculo from "../models/Calculo.js";

class CalculoController {
    static calcular = async (req,res) => {
        try {
            res.status(200).send("aaaa");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default CalculoController;