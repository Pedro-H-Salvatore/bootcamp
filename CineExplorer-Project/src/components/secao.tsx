import { type ReactNode } from "react"

type childrenSecao = {
    title: string
    children: ReactNode
}

const Secao = ({title,children}: childrenSecao) => {
   
       
    
    return( <div>
            <section className="w-full bg-black pt-4">
                <h2 className="text-xl pl-2 cursor-default  w-fit text-white hover:text-red-600 transition-colors duration-300">{title}</h2>
              
                {children}
            </section>
        </div>
    )
    
}

export default Secao