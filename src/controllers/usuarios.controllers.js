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
        return res.status(400).json({erro: "Informe o nome."})
    }
    if (!email) {
        return res.status(400).json({erro: "Informe um email válido."})
    }
    if (!telefone) {
        return res.status(400).json({erro: "Informe um telefone válido."})
    }
    if (!idade) {
        return res.status(400).json({erro: "Informe uma idade."})
    }
    if (!senha) {
        return res.status(400).json({erro: "Informe uma senhas."})
    }
}

export default { listar, buscarPorId, criar,  }