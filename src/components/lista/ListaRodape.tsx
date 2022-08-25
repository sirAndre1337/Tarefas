import ListaTarefas from '../../model/ListaTarefas';
import ListaBotao from './ListaBotao';

interface ListaRodapeProps {
    tarefas: ListaTarefas;
    mudou: (tarefas: ListaTarefas) => void;
}

const ListaRodape = (props: ListaRodapeProps) => {
    const { tarefas, mudou } = props;

    function renderizarQtdeDeItens() {
        return (
            <>
                <span className='text-gray-300 hidden lg:inline'>
                    {tarefas.quantidade}
                    {tarefas.quantidade === 0 ? ' Nenhuma Tarefa Encontrada' :
                        tarefas.quantidade === 1 ? ' Tarefa Encontrada' : ' Tarefas Encontradas'}
                </span>
                <span className='flex-1 hidden lg:inline'></span>
            </>
        )
    }
    function renderizarBotoesFiltro() {
        return (
            <div>
                <ListaBotao
                    selecionado={tarefas.exibindoTodas()}
                    onClick={() => mudou(tarefas.removerFiltro())}
                    className="hidden md:inline"
                >
                    todas
                </ListaBotao>
                <ListaBotao
                    selecionado={tarefas.exibindoSomenteAtivas()}
                    onClick={() => mudou(tarefas.filtrarAtiva())}
                    className="mx-4"
                >
                    Ativas
                </ListaBotao>
                <ListaBotao
                    selecionado={tarefas.exibindoSomenteConcluidas()}
                    onClick={() => mudou(tarefas.filtrarConcluidas())}
                >
                    Concluidas
                </ListaBotao>
            </div>
        )
    }
    function renderizarExcluirConcluidas() {
        return (
            <>
                <span className='flex-grow'></span>
                <ListaBotao
                    onClick={() => mudou(tarefas.removerConcluidas())}
                >
                    Excluir <span className='hidden md:inline'>Concluidas</span>
                </ListaBotao>
            </>
        )
    }

    return (
        <li className='flex p-5'>
            {renderizarQtdeDeItens()}
            {renderizarBotoesFiltro()}
            {renderizarExcluirConcluidas()}
        </li>
    )
}

export default ListaRodape;