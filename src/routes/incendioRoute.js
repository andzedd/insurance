import express from "express";
import IncendioController from "../controllers/incendioController.js"

const router = express.Router();

router
    .get("/taxaRiscoIncendio", IncendioController.taxaRisco)

export default router