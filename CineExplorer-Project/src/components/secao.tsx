type filmeTitulo ={
    nome: String
}

const Secao = (props: filmeTitulo) => {

    return(
        <div>
            <section className="w-full h-60 bg-zinc-900">
                <h2 className="text-xl text-white hover:text-red-600 transition-colors duration-300">{props.nome}</h2>

            </section>
        </div>
    )
}

export default Secao