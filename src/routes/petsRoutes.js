import express from 'express';
import PetController from '../controllers/petsController.js';

const router = express.Router();

router
    .get("/pets", PetController.listarPets)
    .get("/pets/busca", PetController.listarPetsPorCidade) // Mais específica para menos específica. Se fosse primeiro o :id, ia dar ruim.
    .get("/pets/:id", PetController.listarPetPorId)
    .post("/pets", PetController.cadastrarPet)
    .put("/pets/:id", PetController.atualizarPet)
    .delete("/pets/:id", PetController.deletarPet);


export default router;