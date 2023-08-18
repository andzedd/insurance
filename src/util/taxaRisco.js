const taxaRisco = async (req,res,string,cob) => {
    try{
        const params = string.split(';');
        const filter = {};
        const validKeys = cob.schema.obj;
        params.forEach(param => {
            const [key, value] = param.split('=');
            if(validKeys.hasOwnProperty(key)){
                filter[key] = value;
            }
        });

        const objects = await cob.find(filter).exec();

        let ajuste = 1;

        objects.forEach(obj => {
            if(obj.ajt) {
                ajuste *= parseFloat(obj.ajt)
            }
        })

        res.status(200).send(`Total ajuste: ${ajuste}`)
    } catch (err){
        res.status(500).send(`Erro: ${err}`)
    }
}

export default taxaRisco