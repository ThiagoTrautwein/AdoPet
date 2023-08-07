import express from 'express';
import AbrigoController from '../controllers/abrigosController.js';

const router = express.Router();

router
    .get("/abrigos", AbrigoController.listarAbrigos)
    .get("/abrigos/busca", AbrigoController.listarAbrigosPorCidade) // Mais específica para menos específica. Se fosse primeiro o :id, ia dar ruim.
    .get("/abrigos/busca", AbrigoController.listarAbrigosPorEstado)
    .get("/abrigos/:id", AbrigoController.listarAbrigoPorId)
    .post("/abrigos", AbrigoController.cadastrarAbrigo)
    .put("/abrigos/:id", AbrigoController.atualizarAbrigo)
    .delete("/abrigos/:id", AbrigoController.deletarAbrigo);


export default router;