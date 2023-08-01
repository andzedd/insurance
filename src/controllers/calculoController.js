import calculo from "../models/Calculo.js";

class CalculoController {
    static taxaRisco = async (req,res) => {
        let string = "idzmaxlimvlr02=7600;eqpmrc=1;eqpmdl=2"
        let c
        const parametros = string.split(';');
        const filtro = {};
      
        for (const param of parametros) {
            const [chave, valor] = param.split('=');
            filtro[`taxaRisco.danos_eletricos.${chave}`] = valor;
        }
      
        try {
            const resultado = await calculo.findOne(filtro)
      
            if (!resultado) {
                return true
            }
      
            // Encontre o ajuste correto dentro do resultado
            //const ajuste = Object.values(resultado.taxaRisco)[0];
            const ajuste = resultado.taxaRisco.danos_eletricos[1].ajuste
            res.status(200)
        } catch (error) {
            console.error('Erro ao buscar ajuste:', error);
            res.status(500).send(filtro)
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