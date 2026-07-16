import './global.css'
import imagemHero from "./assets/Imagem-hero.jpg"


function App() {


  return (
    <>
      <div className="bg-black font-bold min-h-screen">


        <header >
          <nav className='flex items-center justify-between w-full p-3'>
            <h1 className=" text-3xl "><a className=' text-white'>CINE</a><a className='text-red-600'>EXPLORER</a></h1>
            <div className='flex items-center gap-6'>
              <a href="" className='text-red-600'>Home</a>
              <a href="" className='text-white hover:text-red-600 transition-colors duration-300'>Filmes</a>
              <a href="" className='text-white hover:text-red-600 transition-colors duration-300'>Meus Favoritos</a>
              <a href="" className='text-white hover:text-red-600 transition-colors duration-300'>Detalhes</a>
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
              <button className="bg-red-600 text-white w-fit px-6 py-3 mt-6 rounded-lg hover:bg-red-700 hover:text-gray-200 transition-colors duration-300">
                EXPLORAR CATÁLOGO
              </button>

            </div>
          </section>
        </main>

        <footer >
         
        </footer>
      </div >
    </>
  )
}

export default App
