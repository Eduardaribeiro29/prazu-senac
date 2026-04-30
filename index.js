import express from "express"
import cors from "cors"
import router from "./src/routes/usuarios.routes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use("/usuarios", router);

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`API rodando em http://localhost:${PORTA}`);
});