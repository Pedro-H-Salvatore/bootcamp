import { Link } from 'react-router'
import ImagemPedro from './assets/Imagem-Pedro-Salvatore.jpg'
import Footer from './components/footer'

const Contato = () => {

    return (
        <div className='bg-black flex flex-col min-h-screen font-bold'>
            <header >
                <nav className='w-full p-3'>
                    <h1 className=" text-3xl"><a className=' text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>

                    <div className='flex justify-center gap-6'>
                        <Link className='text-white hover:text-red-600 transition-color duration-300 ' to={"/"}>Home</Link>
                        <Link className='text-white hover:text-red-600 transition-color duration-300' to={"/filme"}>Filmes</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/buscar"}>Buscar</Link>
                        <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/favoritos"}>Meus Favoritos</Link>
                        <Link className='text-red-600' to={"/contato"}>Contato</Link>
                    </div>
                </nav>
            </header>
            <main className='w-full h-screen flex flex-col bg-zinc-900 pt-6'>
                <div className='flex flex-col items-center pt-10 text-2xl text-white'>
                    <h2>Tem uma ideia, sugestão ou oportunidade? Vamos conversar.   </h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-10 w-full h-full'>
                      <div className=' bg-black w-1/3 rounded-2xl border border-red-600 shadow-red-800 shadow-xl'>
                    <div className='flex flex-col items-center w-fulljustify-center pt-5'>
                        <img
                            className='w-60  rounded-full pb-4 object-cover h-60'
                            src={ImagemPedro}
                            alt="Homem branco de cabelos castanhos vestindo uma camisa social preta em um fundo brando"
                        />
                    </div>
                    <div className='flex flex-col items-center w-full justify-between p-5'>
                        <p className='text-white cursor-default hover:text-red-600 transition-colors duration-300'>Pedro Henrique Salvatore</p>

                        <p className='text-white cursor-default hover:text-red-600 transition-colors duration-300 pt-4'><a className='text-white'>Email: </a>pedrosalvatore2112@gmail.com</p>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <div className='w-1/2 flex justify-between pb-4'>
                            <a className='text-white hover:text-red-600 transition-colors duration-300' href="https://github.com/Pedro-H-Salvatore" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a className='text-white hover:text-red-600 transition-colors duration-300' href="https://www.linkedin.com/in/pedro-salvatore-a4a2763b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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