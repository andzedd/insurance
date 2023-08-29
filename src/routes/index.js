import express from "express";
import calculo from "./calculoRoute.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({nome: "Insurance"})
    })
    app.use(
        express.json(),
        calculo
    )
}

export default routes