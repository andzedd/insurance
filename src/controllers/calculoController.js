import calculo from "../models/Calculo.js";

class CalculoController {
    static taxaRisco = async (req,res) => {
        let string = "idzmaxlimvlr01=8888;eqpmrc=2;eqpmdl=4"
        const parametros = string.split(';');
        const filtro = {};
      
        for (const param of parametros) {
            const [chave, valor] = param.split('=');
            filtro[`taxaRiscoDanosEletricos.${chave}`] = valor;
        }
      
        try {
            const resultado = await calculo.find(filtro);
      
            if (!resultado || resultado.length === 0) {
              return res.status(404).send(filtro);
            }
            console.log(resultado)
            // Como a consulta retorna um array, pegamos o primeiro item
            //const ajuste = resultado;
            //const ajt = ajuste.ajt;
            //console.log(resultado)
            res.status(200).send(resultado);
          } catch (error) {
            console.error('Erro ao buscar ajuste:', error);
            res.status(500).send("erro");
          }
    }

    static calcular = async (req,res) => {
        try {
            const resultado = await calculo.find();
            res.status(200).json(resultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default CalculoController;