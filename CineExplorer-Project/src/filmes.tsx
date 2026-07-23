import { Link } from "react-router"
import imagemHeroFilme from './assets/Imagem-her0-filme.jpg'
import Footer from "./components/footer"
import Secao from "./components/secao"

const Filmes = () => {
    return (
        <div className="bg-black font-bold min-h-screen w-full" >
            <header >
                <nav className='w-full p-3'>
                    <h1 className=" text-3xl"><a className=' text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>
                    
                    <div className='flex justify-center gap-6'>
                        <Link className='text-white hover:text-red-600 transition-color duration-300 ' to={"/"}>Home</Link>
                        <Link className='text-red-600' to={"/filme"}>Filmes</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/detalhes"}>Detalhes</Link>
                    </div>
                </nav>
            </header>
            <main className="w-full">
                <section className="relative w-full h-150 overflow-hidden">
                    <img src={imagemHeroFilme} alt="Imagem borrada com diversos filmes" className="w-full h-full object-cover"/>
                     <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <input className= "w-1/2 h-10 text-3xl  bg-white text-black" type="text" placeholder="Digite seu filme"/>
                </div>
                </section>
               <section className="pt-2">
                <Secao nome= "Ação"/>
               </section>
               <section className="pt-2">
                <Secao nome= "Terror/Suspense"/>
               </section>
               <section className="pt-2">
                <Secao nome= "Comédia"/>
               </section>
               <section className="pt-2">
                <Secao nome= "Romance"/>
               </section>

            </main>
            <Footer />
        </div>

    )
}

export default Filmes