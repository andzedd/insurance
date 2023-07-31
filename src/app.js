import express from "express"
import db from "./config/dbConnect.js"
import produtos from "./models/Produto.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão com o banco'))
db.once("open", () => {
    console.log('Conexão com o banco estabelecida com sucesso!')
})

const app = express();

app.use(express.json())

routes(app);


app.get('/produtos/:id', (req,res) => {
    let index = buscaProduto(req.params.id);
    res.json(produtos[index]);
})

app.post('/produtos', (req,res) => {
    produtos.push(req.body);
    res.status(201).send('Produto cadastrado com sucesso!');
})

app.put('/produtos/:id', (req,res) => {
    let index = buscaProduto(req.params.id);
    produtos[index].titulo = req.body.titulo;
    res.json(produtos);
})

app.delete('/produtos/:id', (req,res) => {
    let {id} = req.params;
    let index = buscaProduto(id);
    produtos.splice(index, 1);
    res.send(`Produto ${id} removido com sucesso!`);
})

function buscaProduto(id){
    return produtos.findIndex(produto => produto.id == id);
}

export default app