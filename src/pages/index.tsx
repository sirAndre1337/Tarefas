import Selecao from "../components/lista/Selecao";

export default function Home() {

  return (
    <div className='flex flex-col 
    items-center justify-center h-screen
     text-white bg-gradient-to-tr
      from-purple-500 to-yellow-600' >
        <Selecao valor={true}/>
        <Selecao valor={false}/>
    </div >
  )
}
