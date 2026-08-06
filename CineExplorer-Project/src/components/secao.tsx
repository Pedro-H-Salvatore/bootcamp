import { type ReactNode } from "react"

type childrenSecao = {
    title: string
    children: ReactNode
}

const Secao = ({title,children}: childrenSecao) => {
   
       
    
    return( <div>
            <section className="w-full bg-white pt-4 transition-colors duration-300 dark:bg-black">
                <h2 className="text-xl pl-2 cursor-default w-fit text-zinc-950 hover:text-red-600 transition-colors duration-300 dark:text-white">{title}</h2>
              
                {children}
            </section>
        </div>
    )
    
}

export default Secao
