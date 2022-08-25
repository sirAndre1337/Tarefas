import { useEffect, useState } from "react"
import Tarefa from "../model/Tarefas"
import tarefasInicias from '../data/mock';

export default function Home() {

  let tarefas = tarefasInicias;
  tarefas = tarefas.filtrarConcluidas()
  // tarefas = tarefas.removerConcluidas()
  tarefas = tarefas.removerFiltro();
  tarefas = tarefas.adicionarTarefa(Tarefa.criarConcluida(5, 'Ir na academia'))
  const tarefa3 = tarefas.itens[2];

  tarefas = tarefas.modificarTarefa(tarefa3.alternarStatus());

  function RenderizarTarefas() {
    return tarefas.itens.map(tarefa => {
      return (
        <div key={tarefa.id}>
          <span>{tarefa.id} |</span>
          <span> {tarefa.descricao} |</span>
          <span> {tarefa.concluida ? 'Concluida' : 'Ativa'}</span>
        </div>
      )
    })
  }


  return (
    <div className='flex flex-col 
    items-center justify-center h-screen
     text-white bg-gradient-to-tr
      from-purple-500 to-yellow-600' >
      {RenderizarTarefas()}
    </div >
  )
}
