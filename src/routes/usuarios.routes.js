import express from 'express'
import uc from '../controllers/usuarios.controllers.js'

const router = express.Router();

router.get("/", uc.listar);

export default router;