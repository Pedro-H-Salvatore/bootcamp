

import { useState } from "react"
import type { RespostaTMDB } from "../types/respostaTMDB";
import type { TipoFilme } from "../types/tipoFilme";
import ModalCardFilme from "./modalCardFilme";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const BarraDePesquisa = () => {
    const [pesquisa, setPesquisa] = useState("")
    const [resultado, setResultado] = useState<TipoFilme[]>([])
    const [clicado, setClicado] = useState<TipoFilme | null>(null)

    const fecharModal = () => [
        setClicado(null)
    ]

    const texto = pesquisa.trim()
    const pesquisaFormatada = encodeURIComponent(texto)
    const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${pesquisaFormatada}&language=pt-BR&page=1`

    async function buscarFilme() {
        try {
            const resposta = await fetch(apiURL)
            if (!resposta.ok) {

                throw new Error("Não foi possível achar nenhum resultado")
            }

            
            const dados: RespostaTMDB = await resposta.json()
            setResultado(dados.results)

        } catch (error) {
            console.error(`Falha ao buscar filme`)
        }

    }
    console.log(resultado)

    const filmesPesquisados = resultado.map((pesquisados) => (
        <div className="flex justify-center items-center w-xs bg-zinc-200 rounded-sm inset-0 hover:bg-red-600 transition-colors duration-600 dark:bg-zinc-700"
        key={pesquisados.id}>
            <div
                onClick={() =>
                    setClicado(pesquisados)
                }
                className="cursor-pointer flex flex-col w-1/2 "
                key={pesquisados.id}
            >
                <img
                    className="rounded-lg py-6"
                    src={`https://image.tmdb.org/t/p/w500${pesquisados.poster_path}`}
                    alt={`Capa do filme: ${pesquisados.title}`}
                />
            </div>
        </div>
    ))


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row ">
                <form
                    className="flex items-center gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        buscarFilme();
                    }}
                >
                    <input
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        className="h-10 w-md rounded-md bg-zinc-100 text-zinc-950 text-3xl dark:bg-zinc-800 dark:text-white"
                        placeholder="Digite seu filme"
                    />

                    <button
                        type="submit"
                        className="w-30 rounded-sm bg-zinc-200 text-zinc-950 text-3xl transition-colors duration-300 hover:bg-red-600 dark:bg-zinc-800 dark:text-white"
                    >
                        Buscar
                    </button>
                </form>


            </div>
            <div className="flex w-full flex-row flex-wrap  justify-center gap-4 pt-5">
                {filmesPesquisados}
            </div>
            {clicado && (
                <ModalCardFilme
                    filmeSelecionado={clicado}
                    fecharModal={fecharModal}
                />
            )}
        </div>




    )
}

export default BarraDePesquisa
