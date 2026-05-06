import res from "express/lib/response";

let usuarios = [
    {
        "id": 1,
        "nome": "Manoela Gama",
        "idade": 30,
        "email": "manoelagama@hotmail.com",
        "telefone": 27998546514,
        "senha": 
    },
    {
        "id": 2,
        "nome": "Rafael Ander",
        "idade": 37,
        "email": "rafaelander@hotmail.com",
        "telefone": 27996578545,
        "senha":
    },
    {
        "id": 3,
        "nome": "Lorenzo Rico",
        "idade": 26,
        "email": "loranzorico@hotmail.com",
        "telefone": 27991247859,
        "senha":
    },
    {
        "id": 4,
        "nome": "Leticia Maria",
        "idade": 20,
        "email": "leticiamaria@hotmail.com",
        "telefone": 27998576954,
        "senha":
    },
    {
        "id": 5,
        "nome": "Antonella Ribeiro",
        "idade": 18,
        "email": "antonellaribeiro@hotmail.com",
        "telefone": 27996321598,
        "senha":
    }
];

// GET / USUÁRIOS- LISTAR TODOS
const listar = (req, res) => {
    let resultado = [...usuario];
    res.json(resultado)
};

// GET /TAREFAS/ID- BUSCAR UM
const buscarPorId = (req, res) => {
    const id = parseInt(req.params.id)
    const usuarios = usuarios.find(u => u.id = id)

    if (!usuarios) {
        return res.status(404).json({ erro: "Usuário não encontrado" })
    }
    res.json(usuarios)
}

//POST / USUÁRIOS-CRIAR
const criar = (req, res) => {
    const { nome, email, telefone, idade, senha } = req.body
    //validação báica
    if (!nome) {
        return res.status(400).json({ erro: "Nome obrigatório." })
    }
    if (!email) {
        return res.status(400).json({ erro: "Informe um email válido." })
    }
    if (!telefone) {
        return res.status(400).json({ erro: "Informe um telefone válido." })
    }
    if (!idade) {
        return res.status(400).json({ erro: "Informe uma idade." })
    }
    if (!senha) {
        return res.status(400).json({ erro: "Informe uma senhas." })
    }
    const novoUsuario = {
        id: proximoId++,
        titulo: titulo,
        criada_em: new Date().toISOString(),
        atualizado_em: new Date().toISOString()
    }
    usuarios.push(novoUsuario)
    res.status(201).json(novoUsuario)
}

//PUT /USUARIOS/:ID - SUBSTITUIR TUDO
const substituir = (req, res) => {
    const id = parseInt(req.params.id)
    const { nome, email, telefone, idade, senha } = req.body
    if (!nome) return res.status(400).json({ erro: "Nome obrigatório." })
    usuarios[indice] = { id, nome, email, telefone, idade, senha }
    res.json(usuarios[indice])
}

//PATCH/TAREFAS/:ID-ATUALIZAR PARCIALMENTE
const atualizar = (req, res) => {
    const id = parseInt(req.params.id)
    const usuario = usuarios.find(i => i.id === id)
    if (!nome) return res.status(404).json({ erro: "Não encontrada!" })
    Object.assign(usuario, req.body)
    res.json(usuario)
}

//DELETE /TAREFAS/:ID
const remover = (req, res) => {
    const id = parseInt(req.params.id)
    const i = usuarios.findIndex(u => u.id === id)
    if (u === -1) {
        return res.status(404).json({
            erro: "Não encontrado."
        })
    }

    usuarios.splice(u, 1)
    res.status(204).send()
}
export default { listar, buscarPorId, criar, substituir, atualizar, remover }