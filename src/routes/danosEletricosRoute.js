import express from "express";
import DanosEletricosController from "../controllers/danosEletricosController.js"

const router = express.Router();

router
    .get("/taxaRiscoDanosEletricos", DanosEletricosController.buscaTaxaRisco)

export default router