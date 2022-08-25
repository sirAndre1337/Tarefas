import ListaTarefas from "../../model/ListaTarefas"
import ListaItem from "./ListaItem";

interface ListaProps {
    tarefas: ListaTarefas;
    mudou: (tarefas: ListaTarefas) => void
}

export default function Lista(props: ListaProps) {

    const { tarefas } = props

    function renderizarTarefas() {
        return tarefas.itens.map(tarefa => {
            return (
                <ListaItem
                    key={tarefa.id}
                    valor={tarefa.descricao}
                    concluido={tarefa.concluida}
                    alterarStatus={() => {
                        const tarefaModifica = tarefa.alternarStatus();
                        const novaLista = tarefas.modificarTarefa(tarefaModifica);
                        props.mudou(novaLista);
                    }} />
            )
        })
    }
    return (
        <div className={`
         flex w-3/5
        `}>
            <ul className={`
            w-full list-none bg-white shadow-lg rounded-lg
            `}>
            {renderizarTarefas()}
            </ul>
        </div>
    )
}