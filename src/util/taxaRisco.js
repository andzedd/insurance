const taxaRisco = async (req, res, cob) => {
    try {
        const inputData = req.body;
        const validDocuments = [];

        const documents = await cob.find({}).exec();

        documents.forEach(document => {
            const filteredDocument = { ...document };
            delete filteredDocument.ajt;

            if (isObjectSubset(inputData, filteredDocument._doc)) {
                validDocuments.push(document);
            }
        });

        let finalValue = 1;
        validDocuments.forEach(document => {
            finalValue *= parseFloat(document.ajt);
        });

        res.json({ finalValue });

        return finalValue;

    } catch (err) {
        res.status(500).send(`Erro: ${err}`);
    }
};

function isObjectSubset(subset, superset) {
    for (const key in subset) {
        if(superset[key] === undefined){
            break;
        }
        if (subset[key] !== superset[key]) {
            return false;
        }
    }
    return true;
}

export default taxaRisco;
