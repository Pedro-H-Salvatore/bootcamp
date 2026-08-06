import { Link } from "react-router"
import { useFavoritos } from "./contexts/favoritosContext"
import ImagemHeroFavorito from './assets/imagem-hero-favoritos.jpg'
import Secao from "./components/secao"
import Footer from "./components/footer"
import { useState } from "react"
import type { TipoFilme } from "./types/tipoFilme"
import ModalCardFilme from "./components/modalCardFilme"


const Favoritos = () => {
    const { favoritos } = useFavoritos()
    const [filmeClicado, setFilmeClicado] = useState<TipoFilme | null>(null)

    const fecharModal = () => {
        (
            setFilmeClicado(null)
        )
    }

    const filmesFavoritos = favoritos.map((addAosfavs) => (
        <div key={addAosfavs.id}
            onClick={() => {
                setFilmeClicado(addAosfavs);
            }}
            className="w-fit cursor-pointer p-2 sm:p-3">
            {addAosfavs.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${addAosfavs.poster_path}`}
                    alt={`Capa do filme ${addAosfavs.title}`}
                    className="h-auto w-28 shrink-0 rounded-lg sm:w-32 md:w-40" />)
                : (<p className="text-zinc-950 dark:text-white">Imagem indisponível</p>)}
        </div>
    ))

    return (
        <div className="min-h-screen w-full bg-white text-zinc-950 font-bold transition-colors duration-300 dark:bg-black dark:text-white">
            <header >
                <nav className='w-full p-3 sm:p-4'>
                    <h1 className="text-center text-2xl sm:text-left sm:text-3xl"><a className='text-zinc-950 dark:text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>

                    <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:gap-6 sm:text-base'>
                         <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/"}>Home</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/filme"}>Filmes</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/buscar"}>Buscar</Link>
                        <Link className='text-red-600' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/contato"}>Contato</Link>
                    </div>
                </nav>
            </header>
            <main>
                <section className="relative">
                    <div className="h-112 w-full sm:h-150">
                        <img className="object-cover w-full h-full" src={ImagemHeroFavorito} alt="Amigos sorrindo enquanto assistem a um filme no cinema" />
                    </div>
                    <div className="absolute inset-0 flex w-full max-w-lg flex-col justify-center px-6 text-white sm:px-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl">Compartilhe o que gosta com quem você ama!</h2>
                        </div>
                        <div className="pt-3 sm:pl-2">
                            <p className="text-sm sm:text-base">Acesse todos seus filmes favoritos nesta página!</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="min-h-60">
                        <Secao title="Favoritos">
                            <div className="flex flex-wrap">
                                {favoritos.length === 0 ? <p className="px-4 py-4 text-zinc-950 dark:text-white">Nenhum filme favoritado</p> : filmesFavoritos}
                            </div>
                        </Secao>
                        {filmeClicado && (
                            <ModalCardFilme
                                filmeSelecionado={filmeClicado}
                                fecharModal={fecharModal}
                            />
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Favoritos
