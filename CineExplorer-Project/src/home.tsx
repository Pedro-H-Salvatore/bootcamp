import { Link, useNavigate } from "react-router"
import Footer from "./components/footer"
import imagemHero from "./assets/Imagem-hero.jpg"



const Home = () => {
    const navigate = useNavigate()
    function botaoHome() {
        navigate("/filme")
    }

    return (
        <div className="min-h-screen bg-white text-zinc-950 font-bold transition-colors duration-300 dark:bg-black dark:text-white">
            <header >
                <nav className='w-full p-3 sm:p-4'>
                    <h1 className="text-center text-2xl sm:text-left sm:text-3xl"><a className='text-zinc-950 dark:text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>
                    <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:gap-6 sm:text-base'>
                        <Link className='text-red-600' to={"/"}>Home</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/filme"}>Filmes</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/buscar"}>Buscar</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/contato"}>Contato</Link>
                    </div>
                </nav>
            </header>

            <main>
                <section className='relative h-128 w-full sm:h-150'>
                    <img src={imagemHero} alt="" className="w-full h-full object-cover" />

                    <div className="absolute inset-0 flex w-full max-w-xl flex-col justify-start px-6 pt-20 sm:px-10 sm:pt-28 md:px-15 md:pt-40">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                            TODA HISTÓRIA COMEÇA COM UM PLAY
                        </h2>
                        <button onClick={botaoHome} className="mt-6 w-fit cursor-pointer rounded-lg bg-red-600 px-5 py-3 text-sm text-white transition-colors duration-300 hover:bg-red-700 hover:text-gray-200 sm:px-6 sm:text-base">
                            EXPLORAR CATÁLOGO
                        </button>

                    </div>
                </section>
            </main>
            <Footer />
        </div >
    )
}
export default Home
