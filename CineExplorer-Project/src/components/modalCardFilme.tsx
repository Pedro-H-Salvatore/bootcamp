
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="w-full max-w-2xl rounded-xl bg-zinc-800 p-6 text-white">
                <div className="flex justify-between">
                    
                    {favoritado ? 
                    
                    <button 
                    className= " cursor-pointer bg-white rounded-2xl w-60 text-black hover:bg-red-600 transition-colors duration-300" 
                    onClick={alterarBotao}>Remover dos favoritos
                    </button> :
                    
                    <button 
                     className= " cursor-pointer bg-white rounded-2xl w-60 text-black hover:bg-yellow-300 hover:text-white transition-colors duration-300"
                     onClick={alterarBotao}>
                        Adicionar aos Favoritos
                        </button>}
                    
                    <button
                        className="cursor-pointer w-7 pb-1 text-lg rounded-4xl text-black bg-white hover:bg-red-600 transition-colors duration-300"
                        onClick={fecharModal}>x</button>
                </div>
                <div className="flex items-center not-odd:justify-center">
                    <h1 className="text-2xl">{filmeSelecionado.title}</h1>
                </div>
                <div className="flex items-center justify-center">
                    {filmeSelecionado.poster_path ? (
                        <img
                            className="object-cover w-1/2 pt-3"
                            src={`https://image.tmdb.org/t/p/w500${filmeSelecionado.poster_path}`}
                            alt={`Capa do filme ${filmeSelecionado.title}`}
                        />
                    ) : (
                        <p>Imagem indisponível</p>
                    )}
                </div>
                <div className="pt-3">
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