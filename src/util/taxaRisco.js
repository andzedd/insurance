const taxaRisco = async (req,res,string,cob) => {
    const parametros = string.split(';');
    const filtro = {};
    let ajuste = 1;
      
    for (const param of parametros) {
        const [chave, valor] = param.split('=');
        filtro[`${chave}`] = valor;
    }

    try {
        const resultado = await cob.find(filtro);
        if (!resultado || resultado.length === 0) {
            return res.status(404).send(filtro);
        } else {
            for(let x in resultado){
                ajuste = ajuste * parseFloat(resultado[x].ajt)
            }
            res.status(202).send(filtro)
        }
        res.status(200).send(`Taxa de risco total: ${ajuste}`);
        } catch (error) {
            console.error('Erro ao buscar ajuste:', error);
            res.status(500).send("erro");
        }
}

export default taxaRisco