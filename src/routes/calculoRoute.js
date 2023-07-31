import express from "express";
import CalculoController from "../controllers/calculoController.js";

const router = express.Router();

router
    .get("/calculo", CalculoController.calcular)

export default router;