import express from "express";
import CalculoController from "../controllers/calculoController.js";

const router = express.Router();

router
    .get("/calculo", CalculoController.calcular)
    .get("/taxaRisco", CalculoController.taxaRisco)

export default router;