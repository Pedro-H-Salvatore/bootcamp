import { Link } from "react-router"

const Footer = () => {

    return(
      <div>
         <footer>
          <div className="flex w-full min-h-40 items-center justify-between bg-zinc-900 text-zinc-700 px-4 py-3">
            <div className='items-end'>
              <p>&copy; Todos os direitos reservados CineExplorer</p>
            </div>

            <div>
              <ul className="flex flex-col pr-4">
                 <Link className='text-white hover:text-red-600 transition-colors duration-300' to={"/contato"}>Contato</Link>
              </ul>
            </div>
          </div>
        </footer>
      </div>
        
    )
}

export default Footer