import { useState } from "react"


type filmeProps = {
    titulo: string,
    nota: number
}

const Pesquisa = ({ titulo, nota }: filmeProps) => {

    const [pesquisa, setPesquisa] = useState("")
    console.log(pesquisa)
    return (
        
        <div className="w-50 h-50 bg-red-800 flex flex-col justify-center items-center rounded px-10 py-10">
            <div className="w-45 h-45 bg-stone-200 rounded ">
                <h2 className="p-2">{titulo}</h2>
                <h3 className="p-2">{nota}</h3>
                <input className= "p-2 w-40 " type="text" placeholder="Digite sua busca" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
              
            </div>
        </div>
    )
}


export default Pesquisa 