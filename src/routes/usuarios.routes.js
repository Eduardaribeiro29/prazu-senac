import express from 'express'
import uc from '../controllers/usuarios.controllers.js'

const routerUsuarios = express.Router();


routerUsuarios.get("/", uc.listar);

routerUsuarios.get("/:id", uc.buscarPorId);

routerUsuarios.post("/", uc.criar);

routerUsuarios.post("/", uc.criar);

routerUsuarios.put("/", uc.substituir);

routerUsuarios.patch("/:id", uc.atualizar);

routerUsuarios.delete("/", uc.remover);

export default routerUsuarios;