import incendio from "../models/Incendio.js";
import taxaRisco from "../util/taxaRisco.js";

class IncendioController {
    static taxaRisco = async (req,res) => {
        let string = "idzmaxlimvlr01=7800;eqpmrc=1;eqpmdl=3"
        taxaRisco(req,res,string,incendio)
    }
}

export default IncendioController