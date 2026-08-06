import { Link } from "react-router"

const Footer = () => {

    return(
      <div>
         <footer>
          <div className="flex min-h-40 w-full flex-col items-center justify-center gap-4 bg-zinc-200 px-4 py-6 text-center text-sm text-zinc-600 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-700 sm:flex-row sm:justify-between sm:py-3 sm:text-base">
            <div className='items-end'>
              <p>&copy; Todos os direitos reservados CineExplorer</p>
            </div>

            <div>
              <ul className="flex flex-col sm:pr-4">
                 <Link className='text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white' to={"/contato"}>Contato</Link>
              </ul>
            </div>
          </div>
        </footer>
      </div>
        
    )
}

export default Footer
