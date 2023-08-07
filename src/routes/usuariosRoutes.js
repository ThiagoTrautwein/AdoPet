import express from 'express';
import UsuarioController from '../controllers/usuariosController.js';

const router = express.Router();

router
    .get("/usuarios", UsuarioController.listarUsuarios)
    .get("/usuarios/busca", UsuarioController.listarUsuariosPorCidade) // Mais específica para menos específica. Se fosse primeiro o :id, ia dar ruim.
    .get("/usuarios/:id", UsuarioController.listarUsuarioPorId)
    .post("/usuarios", UsuarioController.cadastrarUsuario)
    .put("/usuarios/:id", UsuarioController.atualizarUsuario)
    .delete("/usuarios/:id", UsuarioController.deletarUsuario);


export default router;