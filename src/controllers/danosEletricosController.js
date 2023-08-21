import danosEletricos from "../models/DanosEletricos.js";
import taxaRisco from "../util/taxaRisco.js";

class DanosEletricosController {
    static buscaTaxaRisco = async (req,res) => {
        taxaRisco(req,res,string,danosEletricos)
    }
}

export default DanosEletricosController