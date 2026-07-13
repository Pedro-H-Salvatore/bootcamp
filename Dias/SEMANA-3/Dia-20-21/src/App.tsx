// import Pesquisa from "../src/components/pesquisa"

import Pesquisa from "./components/pesquisa"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div>
        <h1 className="text-white text-3xl">Faça sua pesquisa aqui</h1>
        <p className="text-white text-sm">algumas funções serão implementadas</p>
        <Pesquisa titulo="" nota={0}/>
        <p className="text-white text-sm">Exercício do dia 20/21</p>
      </div>

    </div>
  )
}

export default App
