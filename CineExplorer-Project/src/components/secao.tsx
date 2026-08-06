import { type ReactNode } from "react"

type childrenSecao = {
    title: string
    children: ReactNode
}

const Secao = ({title,children}: childrenSecao) => {
   
       
    
    return( <div>
            <section className="w-full bg-white pt-4 transition-colors duration-300 dark:bg-black">
                <h2 className="w-fit cursor-default pl-2 text-lg text-zinc-950 transition-colors duration-300 hover:text-red-600 dark:text-white sm:text-xl">{title}</h2>
              
                {children}
            </section>
        </div>
    )
    
}

export default Secao
