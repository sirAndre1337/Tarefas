import { useState } from "react";
import Lista from "../components/lista/Lista";
import tarefasIniciais from '../data/mock';
import ListaTarefas from "../model/ListaTarefas";

export default function Home() {

  const [tarefas, setTarefas] = useState<ListaTarefas>(tarefasIniciais)

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-300
    
    ' >

      <Lista tarefas={tarefas} mudou={(novasTarefas) => {setTarefas(novasTarefas)}} />

    </div >
  )
}
