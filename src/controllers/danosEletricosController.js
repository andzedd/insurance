import danosEletricos from "../models/DanosEletricos.js";
import taxaRisco from "../util/taxaRisco.js";

class DanosEletricosController {
    static buscaTaxaRisco = async (req,res) => {
        let string = "idzmaxlimvlr02=5000;eqpmrc=2;eqpmdl=5"
        taxaRisco(req,res,string,danosEletricos)
    }
}

export default DanosEletricosController