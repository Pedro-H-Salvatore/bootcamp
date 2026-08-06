import { Link } from 'react-router'
import ImagemPedro from './assets/Imagem-Pedro-Salvatore.jpg'
import Footer from './components/footer'

const Contato = () => {

    return (
        <div className='flex min-h-screen flex-col bg-white text-zinc-950 font-bold transition-colors duration-300 dark:bg-black dark:text-white'>
            <header >
                <nav className='w-full p-3 sm:p-4'>
                    <h1 className="text-center text-2xl sm:text-left sm:text-3xl"><a className='text-zinc-950 dark:text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>

                    <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:gap-6 sm:text-base'>
                        <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/"}>Home</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-color duration-300 dark:text-white' to={"/filme"}>Filmes</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/buscar"}>Buscar</Link>
                        <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-red-600' to={"/contato"}>Contato</Link>
                    </div>
                </nav>
            </header>
            <main className='flex min-h-[42rem] w-full flex-1 flex-col bg-zinc-100 px-4 py-8 transition-colors duration-300 dark:bg-zinc-900 sm:px-6'>
                <div className='flex flex-col items-center pt-4 text-center text-xl text-zinc-950 dark:text-white sm:pt-8 sm:text-2xl'>
                    <h2>Tem uma ideia, sugestão ou oportunidade? Vamos conversar.</h2>
                </div>
                <div className='flex h-full w-full flex-1 flex-col items-center justify-center gap-10 py-8'>
                      <div className='w-full max-w-xl rounded-2xl border border-red-600 bg-white shadow-xl shadow-red-800 transition-colors duration-300 dark:bg-black sm:w-2/3 lg:w-1/3'>
                    <div className='flex flex-col items-center w-fulljustify-center pt-5'>
                        <img
                            className='h-40 w-40 rounded-full object-cover sm:h-60 sm:w-60'
                            src={ImagemPedro}
                            alt="Homem branco de cabelos castanhos vestindo uma camisa social preta em um fundo brando"
                        />
                    </div>
                    <div className='flex w-full flex-col items-center justify-between px-4 py-5 text-center sm:px-5'>
                        <p className='cursor-default text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white'>Pedro Henrique Salvatore</p>

                        <p className='cursor-default break-all pt-4 text-sm text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white sm:text-base'><a>Email: </a>pedrosalvatore2112@gmail.com</p>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <div className='flex w-2/3 justify-between gap-4 pb-4 sm:w-1/2'>
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
