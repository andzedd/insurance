import express from "express";
import calculo from "./calculoRoute.js"
import incendio from "./incendioRoute.js"
import danoseletricos from "./danosEletricosRoute.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({nome: "Insurance"})
    })
    app.use(
        express.json(),
        calculo,
        incendio,
        danoseletricos
    )
}

export default routes