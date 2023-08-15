const taxaRisco = async (req,res,string,cob) => {
    try{
        const conditions = {};
        const keyValue = string.split(";");
        for(const pair of keyValue){
            const [k,v] = pair.split('=');
            conditions[k] = v;
        }
        const result = await cob.findOne(conditions, {projection: {ajt:1}});
        console.log(conditions)

        if(result){
            const ajuste = result.ajt;
            res.status(200).send(`Ajuste encontrado: ${result.ajt}`);
        } else {
            res.status(400).send("Nenhum ajuste encontrado");
        }
    } catch (err) {
        res.status(400).send(`Erro: ${err}`);
    }
}

export default taxaRisco