import { useState } from "react";
import Formulario from "../components/formulario/Formulario";
import Lista from "../components/lista/Lista";
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";
// import tarefasIniciais from '../data/mock';  Retirando os dados mockados
import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefas";

export default function Home() {

  const [tarefas, setTarefas] = useState<ListaTarefas>(new ListaTarefas([]))

  function novaTarefa(novaTarefa: Tarefa) {
    setTarefas(tarefas.adicionarTarefa(novaTarefa));
  }

  return (
    <div className='flex flex-col h-screen bg-gray-300'>
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefa} />
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={tarefas} mudou={(novasTarefas) => { setTarefas(novasTarefas) }} />
      </Conteudo>
    </div >
  )
}
