const acharAjuste = async (req,res,camada) => {
    try{
        const jsonEntrada = req.body.calculo.dadosOrcamento;
        const ajustes = [];

        const ajustesBanco = await camada.find({}).exec();

        ajustesBanco.forEach(ajuste => {
            const jsonBanco = { ...ajuste };
            delete jsonBanco._doc._id;
            delete jsonBanco._doc.ajt;

            if(comparaObjetos(jsonEntrada,jsonBanco._doc)){
                ajustes.push(ajuste);
            }
        });

        let ajusteFinal = 1;
        if(ajustes.length > 0){
            ajustes.forEach(ajuste => {
                ajusteFinal *= parseFloat(ajuste.ajt);
            });
        }

        ajusteFinal = Math.round((ajusteFinal + Number.EPSILON) * 10000) / 10000
        return ajusteFinal;
    } catch (err) {
        res.status(500).send(`Erro: ${err}`);
    }
}

function filtrarJson(jsonEntrada,jsonBanco){
    const jsonFiltrado = {};
    for(const c in jsonEntrada){
        if(jsonBanco.hasOwnProperty(c)){
            jsonFiltrado[c] = jsonEntrada[c];
        }
    }

    return jsonFiltrado;
}

function comparaObjetos(jsonEntrada,jsonBanco){
    const jsonFiltrado = filtrarJson(jsonEntrada,jsonBanco);
    const chavesFiltradas = Object.keys(jsonFiltrado);
    const chavesBanco = Object.keys(jsonBanco);

    if(chavesFiltradas.length !== chavesBanco.length){
        return false;
    }

    for(const chave of chavesFiltradas){
        if(jsonFiltrado[chave] !== jsonBanco[chave]){
            return false;
        }
    }
    return true;
}

export default acharAjuste;