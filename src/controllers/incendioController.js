import incendio from "../models/Incendio.js";
import taxaRisco from "../util/taxaRisco.js";

class IncendioController {
    static taxaRisco = async (req,res) => {
        const ajt = taxaRisco(req,res,incendio);
        console.log('aaaa');
    }
}

export default IncendioController