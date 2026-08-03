import { Link } from "react-router"
import BarraDePesquisa from "./components/barraDePesquisa"
import Footer from "./components/footer"


const Buscar = () => {

    return (
        <div className="bg-black flex flex-col min-h-screen font-bold">

            <header >
                <nav className='w-full p-3'>
                    <h1 className=" text-3xl"><a className=' text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>

                    <div className='flex justify-center gap-6'>
                        <Link className='text-white hover:text-red-600 transition-color duration-300 ' to={"/"}>Home</Link>
                        <Link className='text-white hover:text-red-600 transition-color duration-300' to={"/filme"}>Filmes</Link>
                        <Link className='text-red-600' to={"/buscar"}>Buscar</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/contato"}>Contato</Link>

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