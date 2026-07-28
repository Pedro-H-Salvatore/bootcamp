import { Link } from "react-router"
import { useFavoritos } from "./contexts/favoritosContext"
import ImagemHeroFavorito from './assets/imagem-hero-favoritos.jpg'
import Secao from "./components/secao"
import Footer from "./components/footer"


const Favoritos = () => {
    const { favoritos } = useFavoritos()

    const filmesFavoritos = favoritos.map((addAosfavs) => (
        <div key={addAosfavs.id} 
            className="cursor-pointer p-3 w-fit ">
            {addAosfavs.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${addAosfavs.poster_path}`} 
                alt={`Capa do filme ${addAosfavs.title}`} 
                className="h-auto w-40 shrink-0 rounded-lg"/>) 
                : (<p className="text-white">Imagem indisponível</p>)}
        </div>
    ))

    return (
        <div className="bg-black font-bold min-h-screen w-full">
            <header >
                <nav className='w-full p-3'>
                    <h1 className=" text-3xl"><a className=' text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>

                    <div className='flex justify-center gap-6'>
                        <Link className='text-white hover:text-red-600 transition-color duration-300 ' to={"/"}>Home</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/filme"}>Filmes</Link>
                        <Link className='text-red-600' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/detalhes"}>Detalhes</Link>
                    </div>
                </nav>
            </header>
            <main>
                <section>
                    <div className="relative w-full h-150">
                        <img className="object-cover w-full h-full" src={ImagemHeroFavorito} alt="Amigos sorrindo enquanto assistem a um filme no cinema" />
                    </div>
                    <div className="text-white flex flex-col w-lg justify-center absolute inset-0 ">
                        <div className="pl-7">
                            <h2 className="text-6xl">Compartilhe o que gosta com quem você ama!</h2>
                        </div>
                        <div className="pt-3 pl-9">
                            <p>Acesse todos seus filmes favoritos nesta página!</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="min-h-60">
                       <Secao title="Favoritos">
                        <div className="flex flex-wrap">
                            {favoritos.length === 0 ? <p className="text-white px-4 py-4">Nenhum filme favoritado</p> : filmesFavoritos}
                        </div>
                       </Secao>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
export default Favoritos