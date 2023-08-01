import calculo from "../models/Calculo.js";

class CalculoController {
    static taxaRisco = async (req,res) => {
        let string = "idzmaxlimvlr02=7600;eqpmrc=1;eqpmdl=2"
        const parametros = string.split(';');
        const filtro = {};
      
        for (const param of parametros) {
            const [chave, valor] = param.split('=');
            filtro[`taxaRisco.ajustes_cob_2.1.${chave}`] = valor;
          }
      
        try {
            const resultado = await calculo.findOne(filtro);
      
            if (!resultado) {
                res.status(500).send(filtro) // Ajuste não encontrado para os parâmetros informados
                return true
            }
      
            // Encontre o ajuste correto dentro do resultado
            const ajuste = Object.values(resultado.taxaRisco)[0];
            res.status(200).send(ajuste)
        } catch (error) {
            console.error('Erro ao buscar ajuste:', error);
            res.status(500).json(error)
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