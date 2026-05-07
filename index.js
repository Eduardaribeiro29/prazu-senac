import express from "express";
import cors from "cors";
import usuarios.routes from "./src/routes/usuarios.routes.js";
import tarefas.routes from "./src/routes/tarefas.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/usuarios", usuarios.routes);
app.use("/tarefas", tarefas.routes);

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        recursos: ['/usuarios', '/tarefas']
    });
});

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`API rodando em http://localhost:${PORTA}`);
});