
import type { TipoModal } from "../types/tipoModal"
import { useFavoritos } from "../contexts/favoritosContext"



const ModalCardFilme = (props: TipoModal) => {
    const { filmeSelecionado, fecharModal } = props
    const {
        adicionarFavorito, removerFavoritos, estaFavoritado } = useFavoritos();

    const favoritado = estaFavoritado(filmeSelecionado.id);

    function alterarBotao() {
        if (favoritado) {
            removerFavoritos(filmeSelecionado.id)
            alert(`O filme ${filmeSelecionado.title} foi removido dos favoritos`)
        } else {
            adicionarFavorito(filmeSelecionado)
            alert(`O filme ${filmeSelecionado.title} foi adicionado aos favoritos`)
        }
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-4">
            <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-4 text-zinc-950 transition-colors duration-300 dark:bg-zinc-800 dark:text-white sm:p-6">
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                    
                    {favoritado ? 
                    
                    <button 
                    className= "w-full cursor-pointer rounded-2xl bg-white px-3 py-2 text-black transition-colors duration-300 hover:bg-red-600 sm:w-60"
                    onClick={alterarBotao}>Remover dos favoritos
                    </button> :
                    
                    <button 
                     className= "w-full cursor-pointer rounded-2xl bg-white px-3 py-2 text-black transition-colors duration-300 hover:bg-yellow-300 hover:text-white sm:w-60"
                     onClick={alterarBotao}>
                        Adicionar aos Favoritos
                        </button>}
                    
                    <button
                        className="h-8 w-8 cursor-pointer self-end rounded-full bg-white pb-1 text-lg text-black transition-colors duration-300 hover:bg-red-600"
                        onClick={fecharModal}>x</button>
                </div>
                <div className="flex items-center justify-center pt-3 text-center">
                    <h1 className="text-xl sm:text-2xl">{filmeSelecionado.title}</h1>
                </div>
                <div className="flex items-center justify-center">
                    {filmeSelecionado.poster_path ? (
                        <img
                            className="w-full max-w-xs object-cover pt-3 sm:w-1/2"
                            src={`https://image.tmdb.org/t/p/w500${filmeSelecionado.poster_path}`}
                            alt={`Capa do filme ${filmeSelecionado.title}`}
                        />
                    ) : (
                        <p>Imagem indisponível</p>
                    )}
                </div>
                <div className="pt-3 text-sm sm:text-base">
                    <p className="text-justify pt-2">Resumo: {filmeSelecionado.overview}</p>
                    <p className="pt-2">Data de lançamento: {filmeSelecionado.release_date}</p>
                    {filmeSelecionado.vote_average ? (<p className="pt-2">Nota: {filmeSelecionado.vote_average.toFixed(1)}</p>) : <p>Nota indisponivel</p>}
                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default ModalCardFilme
