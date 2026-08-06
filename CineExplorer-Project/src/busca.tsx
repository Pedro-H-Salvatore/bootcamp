import { Link } from "react-router"
import BarraDePesquisa from "./components/barraDePesquisa"
import Footer from "./components/footer"


const Buscar = () => {

    return (
        <div className="flex min-h-screen flex-col bg-white text-zinc-950 font-bold transition-colors duration-300 dark:bg-black dark:text-white">

            <header >
                <nav className='w-full p-3'>
                    <h1 className=" text-3xl"><a className='text-zinc-950 dark:text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>

                    <div className='flex justify-center gap-6'>
                        <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/"}>Home</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/filme"}>Filmes</Link>
                        <Link className='text-red-600' to={"/buscar"}>Buscar</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/contato"}>Contato</Link>

                    </div>
                    <div className="p-7">

                    </div>
                </nav>
            </header>
            <main>
                <div className="flex items-center justify-center">
                    <BarraDePesquisa />
                </div>
            </main>
            <footer className="mt-auto">
                <div>
                    <Footer />
                </div>

            </footer>
        </div>
    )
}

export default Buscar
