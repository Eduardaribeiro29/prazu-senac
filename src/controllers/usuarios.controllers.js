//nome,telefone,email,idade

let usuarios = [
    {
        "id": 1,
        "Nome": "Manoela Gama",
        "Idade": 30,
        "Email": "manoelagama@hotmail.com",
        "Telefone": 27998546514
    },
    {
        "id": 2,
        "Nome": "Rafael Ander",
        "Idade": 37,
        "Email": "rafaelander@hotmail.com",
        "Telefone": 27996578545
    },
    {
        "id": 3,
        "Nome": "Lorenzo Rico",
        "Idade": 26,
        "Email": "loranzorico@hotmail.com",
        "Telefone": 27991247859
    },
    {
        "id": 4,
        "Nome": "Leticia Maria",
        "Idade": 20,
        "Email": "leticiamaria@hotmail.com",
        "Telefone": 27998576954
    },
    {
        "id": 5,
        "Nome": "Antonella Ribeiro",
        "Idade": 18,
        "Email": "antonellaribeiro@hotmail.com",
        "Telefone": 27996321598
    }
];

const listar = (req, res) => { res.json(usuarios) }

const buscarPorId = (req, res) => {
    const id = parseInt(req.params.id)
    const usuarios = usuarios.find(u => u.id = id)

    if (!usuarios) {
        return res.status(404).json({ erro: "Tarefa não encontrada" })
    }
    res.json(usuarios)
}

export default { listar, buscarPorId }