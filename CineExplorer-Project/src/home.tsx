import { Link, useNavigate } from "react-router"
import Footer from "./components/footer"
import imagemHero from "./assets/Imagem-hero.jpg"



const Home = () => {
    const navigate = useNavigate()
    function botaoHome() {
        navigate("/filme")
    }

    return (
        <div className="bg-black font-bold min-h-screen">
            <header >
                <nav className='w-full p-3'>
                    <h1 className=" text-3xl "><a className=' text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>
                    <div className='flex items-start justify-center gap-6'>
                        <Link className='text-red-600' to={"/"}>Home</Link>
                        <Link className='text-white hover:text-red-600 transition-color duration-300' to={"/filme"}>Filmes</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/buscar"}>Buscar</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/contato"}>Contato</Link>
                    </div>
                </nav>
            </header>

            <main>
                <section className='relative w-full h-150'>
                    <img src={imagemHero} alt="" className="w-full h-full object-cover" />

                    <div className="w-xl absolute inset-0 flex flex-col justify-start pt-40 px-15 ">
                        <h2 className="text-white text-5xl font-bold">
                            TODA HISTÓRIA COMEÇA COM UM PLAY
                        </h2>
                        <button onClick={botaoHome} className="cursor-pointer bg-red-600 text-white w-fit px-6 py-3 mt-6 rounded-lg hover:bg-red-700 hover:text-gray-200 transition-colors duration-300">
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