const acharAjuste = async (req,res,camada) => {
    try{
        const jsonEntrada = req.body;
        const ajustes = [];

        const ajustesBanco = await camada.find({}).exec();
    } catch (err) {
        res.status(500).send(`Erro: ${err}`);
    }
}