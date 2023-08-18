const taxaRisco = async (req,res,string,cob) => {
    try{
        const filter = req.body;
        const validKeys = cob.schema.obj;
        
        const filteredKeys = Object.keys(filter).filter(key => validKeys.hasOwnProperty(key));
        const query = filteredKeys.reduce((acc, key) => {
            acc[key] = filter[key];
            return acc;
          }, {});

        console.log(query)
        const objects = await cob.find(query).exec();

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