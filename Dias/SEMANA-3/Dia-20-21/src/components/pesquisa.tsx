import { useState } from "react"


type filmeProps = {
    titulo: string,
    nota: number
}



const Pesquisa = ({ titulo, nota }: filmeProps) => {

    const [pesquisa, setPesquisa] = useState("")
    const [notaFilme, setNotaFilme] = useState(0)




    const exibirTitulo = () => {
        titulo = pesquisa;
        return titulo
    }

    const exibirNota = () => {
        nota = notaFilme
        return nota
    }
    return (

        <div className="w-70 h-70 bg-black flex flex-col justify-center items-center rounded px-10 py-10">
            <div className="w-65 h-65 bg-stone-100 ">
                <h2 className="p-2">{exibirTitulo()}</h2>
                <h3 className="p-2">{exibirNota()}</h3>
                <div className="flex flex-col items-center justify-center">
                    <input className="p-2 w-40 border border-black rounded-lg" type="text" placeholder="Digite sua busca" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
                    <input className=" mt-1 p-2 w-40 border border-black rounded-lg gap-1" type="number" placeholder="Digite sua nota" value={notaFilme} onChange={(e) => setNotaFilme(Number(e.target.value))} />
                    <button className="bg-black text-white w-40 rounded-2xl h-8 mt-1">Buscar</button>
                </div>

            </div>
        </div>
    )
}


export default Pesquisa 