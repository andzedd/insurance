import incendio from "../models/Incendio.js";

class IncendioController {
    static taxaRisco = async (req,res) => {
        let string = "idzmaxlimvlr01=7800;eqpmrc=1;eqpmdl=3"
        const parametros = string.split(';');
        const filtro = {};
        let ajuste = 1;
      
        for (const param of parametros) {
            const [chave, valor] = param.split('=');
            filtro[`${chave}`] = valor;
        }

        try {
            const resultado = await incendio.find(filtro);
      
            if (!resultado || resultado.length === 0) {
              return res.status(404).send(filtro);
            }
            for(let x in resultado){
                ajuste = ajuste * parseFloat(resultado[x].ajt)
            }
            console.log(ajuste)
            res.status(200).send(resultado);
        } catch (error) {
            console.error('Erro ao buscar ajuste:', error);
            res.status(500).send("erro");
        }
    }
}

export default IncendioController