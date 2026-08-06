import { Link } from 'react-router'
import ImagemPedro from './assets/Imagem-Pedro-Salvatore.jpg'
import Footer from './components/footer'

const Contato = () => {

    return (
        <div className='flex min-h-screen flex-col bg-white text-zinc-950 font-bold transition-colors duration-300 dark:bg-black dark:text-white'>
            <header >
                <nav className='w-full p-3'>
                    <h1 className=" text-3xl"><a className='text-zinc-950 dark:text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>

                    <div className='flex justify-center gap-6'>
                        <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/"}>Home</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/filme"}>Filmes</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/buscar"}>Buscar</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-red-600' to={"/contato"}>Contato</Link>
                    </div>
                </nav>
            </header>
            <main className='flex h-screen w-full flex-col bg-zinc-100 pt-6 transition-colors duration-300 dark:bg-zinc-900'>
                <div className='flex flex-col items-center pt-10 text-2xl text-zinc-950 dark:text-white'>
                    <h2>Tem uma ideia, sugestão ou oportunidade? Vamos conversar.   </h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-10 w-full h-full'>
                      <div className='w-1/3 rounded-2xl border border-red-600 bg-white shadow-xl shadow-red-800 transition-colors duration-300 dark:bg-black'>
                    <div className='flex flex-col items-center w-fulljustify-center pt-5'>
                        <img
                            className='w-60  rounded-full pb-4 object-cover h-60'
                            src={ImagemPedro}
                            alt="Homem branco de cabelos castanhos vestindo uma camisa social preta em um fundo brando"
                        />
                    </div>
                    <div className='flex flex-col items-center w-full justify-between p-5'>
                        <p className='cursor-default text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white'>Pedro Henrique Salvatore</p>

                        <p className='cursor-default pt-4 text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white'><a>Email: </a>pedrosalvatore2112@gmail.com</p>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <div className='w-1/2 flex justify-between pb-4'>
                            <a className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' href="https://github.com/Pedro-H-Salvatore" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' href="https://www.linkedin.com/in/pedro-salvatore-a4a2763b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>

                    </div>
                </div>
              
                </div>
            </main>
            <div className='mt-auto'>
                <Footer />
            </div>

        </div>
    )
}

export default Contato
