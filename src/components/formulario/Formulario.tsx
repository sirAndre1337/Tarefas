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
        <div className="flex flex-1 justify-center">
            <input
                type="text"
                placeholder="Nova tarefa"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? criarNovaTarefa() : false}
                className="border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 py-2 px-3 rounded-lg border-2 w-1/2 text-1xl"
            />
            <button
                onClick={criarNovaTarefa}
                className="ml-3 bg-purple-600 text-white text-xl focus:outline-none px-5 py-3 rounded-lg">
                +
            </button>
        </div>
    )
}