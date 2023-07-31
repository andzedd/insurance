import express from "express"
import db from "./config/dbConnect.js"
import produtos from "./models/Calculo.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão com o banco'))
db.once("open", () => {
    console.log('Conexão com o banco estabelecida com sucesso!')
})

const app = express();

app.use(express.json())

routes(app);

export default app