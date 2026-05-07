import { tarefas,  } from '../database/conexao.js';

const listar = (req, res) => {
    res.json(tarefas)
}

const buscarPorId = (req, res) => {
    const id = parseInt(req.params.id)
    const tarefa = tarefas.find(t => t.id === id)

    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada" })
    }
    res.json(tarefa)
}

const criar = (req, res) => {
    const { titulo, usuarioId, concluido= falso } = req.body
    if(!titulo || !usuarioId) {
        return res.status(400).json({ erro: "Título e usuarioId são obrigatórios."});
    }

    const novaTarefa ={
        id: proximoId++,
        titulo: titulo,
        prioridade: prioridade || "media",
        concuida: false,
        criada_em: new Date().toISOString()
    }
    tarefas.push(novaTarefa)
    res.status(201).json(novaTarefa)
}

const substituir = (req, res) => {
    const id = parseInt(req.params.id)
    const { titulo, prioridade, concluida } = req.body
    if (!titulo) return res.status(400).json({ erro: "Título obrigatório."})
        tarefas[indice] = { id, titulo, prioridade, concluida }
    res.json(tarefas[indice])
}

const atualizar = (req, res) => {
    const id = parseInt(req.params.id)
    const tarefa = tarefas.find(t => t.id === id)
    if (!tarefa) return res.status(404).json({ erro: "Não encontrada. "})
        res.json(tarefa)
}

const remover = (req, res) => {
    const id = parseInt(req.params.id)
    const i = tarefas.findIndex(t => t.id === id)
    if (i === -1) {
        return res.status(404).json({
            erro: "Não encontrada."
        })
    }
    tarefas.splice(i, 1)
    res.status(204).send()
}