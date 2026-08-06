import { Link, useNavigate } from "react-router"
import imagemHeroFilme from './assets/Imagem-hero-filme.jpg'
import Footer from "./components/footer"
import Secao from "./components/secao"

import CardsFilmes from "./components/cardsFilmes"


const Filmes = () => {
 const navigate = useNavigate()
   function botaoBuscar(){
    navigate("/buscar")
   }

    return (
        <div className="min-h-screen w-full bg-white text-zinc-950 font-bold transition-colors duration-300 dark:bg-black dark:text-white" >
            <header >
                <nav className='w-full p-3'>
                    <h1 className=" text-3xl"><a className='text-zinc-950 dark:text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>
                    
                    <div className='flex justify-center gap-6'>
                         <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/"}>Home</Link>
                        <Link className='text-red-600' to={"/filme"}>Filmes</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/buscar"}>Buscar</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/contato"}>Contato</Link>
                    </div>
                </nav>
            </header>
            <main className="w-full">
                <section className="relative w-full h-150 overflow-hidden">
                    <img src={imagemHeroFilme} alt="Imagem borrada com diversos filmes" className="w-full h-full object-cover"/>
                     <div className="absolute inset-0 flex items-center  justify-center text-3xl">
                      <h3 className="text-white">Não Achou seu filme? <button className="border border-solid rounded-lg px-2 hover:bg-red-600 hover:text-black transition-colors duration-300 cursor-pointer" onClick={botaoBuscar}>CLIQUE AQUI!</button> e procure pelo seu filme! </h3>

                </div>
                </section>  
               <section className="pt-2">
                <Secao title = "Ação">
                  <CardsFilmes title = "Ação"/>
                </Secao>
               </section>
                 <section className="pt-2">
                <Secao title = "Comédia">
                  <CardsFilmes title = "Comédia"/>
                </Secao>
               </section>
                 <section className="pt-2">
                <Secao title = "Terror/Suspense">
                  <CardsFilmes title = "Terror/Suspense"/>
                </Secao>
               </section>
              <section className="pt-2">
                <Secao title = "Romance">
                  <CardsFilmes title = "Romance"/>
                </Secao>
               </section>
            </main>
            <Footer />
        </div>

    )
}

export default Filmes
