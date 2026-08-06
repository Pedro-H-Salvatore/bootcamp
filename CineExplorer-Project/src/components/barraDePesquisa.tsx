

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
        <div className="flex w-full items-center justify-center rounded-sm bg-zinc-200 transition-colors duration-600 hover:bg-red-600 dark:bg-zinc-700"
        key={pesquisados.id}>
            <div
                onClick={() =>
                    setClicado(pesquisados)
                }
                className="flex w-full cursor-pointer flex-col"
                key={pesquisados.id}
            >
                <img
                    className="h-auto w-full rounded-lg p-2 sm:p-3"
                    src={`https://image.tmdb.org/t/p/w500${pesquisados.poster_path}`}
                    alt={`Capa do filme: ${pesquisados.title}`}
                />
            </div>
        </div>
    ))


    return (
        <div className="flex w-full flex-col items-center justify-center px-4">
            <div className="flex w-full max-w-3xl flex-row">
                <form
                    className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        buscarFilme();
                    }}
                >
                    <input
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        className="h-10 w-full min-w-0 rounded-md bg-zinc-100 px-3 text-xl text-zinc-950 dark:bg-zinc-800 dark:text-white sm:flex-1 sm:text-3xl"
                        placeholder="Digite seu filme"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-sm bg-zinc-200 px-4 py-1 text-xl text-zinc-950 transition-colors duration-300 hover:bg-red-600 dark:bg-zinc-800 dark:text-white sm:w-30 sm:text-3xl"
                    >
                        Buscar
                    </button>
                </form>


            </div>
            <div className="grid w-full grid-cols-2 gap-3 pt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
