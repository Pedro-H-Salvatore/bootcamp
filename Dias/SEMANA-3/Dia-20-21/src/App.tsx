// import Pesquisa from "../src/components/pesquisa"

import Pesquisa from "./components/pesquisa"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div>
        <h1>Faça sua pesquisa aqui</h1>
        <p>algumas funções serão implantadas</p>
        <Pesquisa titulo={"batman"} nota={10} />
        <p>Exercício do dia 20/21</p>
      </div>

    </div>
  )
}

export default App
