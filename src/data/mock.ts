import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefas";
import TipoFiltro from "../model/TipoFiltro";

const mockList: Tarefa[] = [
    Tarefa.criarAtiva(1, 'Estudar React'),
    Tarefa.criarConcluida(2, 'Limpar Carro'),
    Tarefa.criarAtiva(3, 'Comprar livro'),
]

export default new ListaTarefas(mockList, TipoFiltro.NENHUM);