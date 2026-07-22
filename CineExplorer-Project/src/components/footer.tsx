
const Footer = () => {

    return(
         <footer>
          <div className="flex w-full min-h-40 items-center justify-between bg-zinc-950 text-zinc-700 px-4 py-3">
            <div className='items-end'>
              <p>&copy; Todos os direitos reservados CineExplorer</p>
            </div>

            <div>
              <ul className="flex flex-col pr-4">
                <li><a className='hover:text-red-600 transition-colors duration-300' href="">Contato</a></li>
              </ul>
            </div>
          </div>
        </footer>
    )
}

export default Footer