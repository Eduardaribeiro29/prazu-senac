import express from 'express'
import uc from '../controllers/usuarios.controllers.js'

const router = express.Router();


router.get("/", uc.listar);

router.get("/:id", uc.buscarPorId);

export default router;