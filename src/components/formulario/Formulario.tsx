import { useState } from "react"
import Tarefa from "../../model/Tarefas";

interface FormularioProps {
    novaTarefaCriada: (tarefa: Tarefa) => void;
}

export default function Formulario(props: FormularioProps) {
    const [descricao, setDescricao] = useState('')

    function criarNovaTarefa() {
        console.log('Criar nova tarefa');
        if (descricao?.trim().length > 0) {
            const novaTarefa = Tarefa.criarAtiva(Math.random(), descricao);
            props.novaTarefaCriada(novaTarefa);
            setDescricao('');
        }
    }

    return (
        <div>
            <input
                type="text"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? criarNovaTarefa() : false}
            />
        </div>
    )
}