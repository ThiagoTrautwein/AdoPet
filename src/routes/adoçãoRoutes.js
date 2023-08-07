import express from 'express';
import AdocaoController from '../controllers/adocaoController.js';

const router = express.Router();

router
    .get("/adocoes", AdocaoController.listarAdocoes)
    .post("/adocoes", AdocaoController.cadastrarAdocao)
    .delete("/adocoes/:id", AdocaoController.deletarAdocao);

export default router;