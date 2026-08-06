import { useEffect, useState } from "react";

const MudarTema = () => {
    const [tema, setTema] = useState(() => {
        const temaSalvo = localStorage.getItem("cineexplorer:tema");

        return temaSalvo !== "claro";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", tema);

        localStorage.setItem(
            "cineexplorer:tema",
            tema ? "escuro" : "claro"
        );
    }, [tema]);

    return (
        <div className="fixed bottom-5 right-5 z-40">
            <button
                onClick={() => setTema((temaAtual) => !temaAtual)}
                type="button"
                aria-label={tema ? "Ativar tema claro" : "Ativar tema escuro"}
                title={tema ? "Ativar tema claro" : "Ativar tema escuro"}
                className="cursor-pointer rounded-full border border-zinc-300 bg-white px-4 py-3 text-black shadow-lg transition-colors duration-300 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
            >
                {tema ? "Tema claro" : "Tema escuro"}
            </button>
        </div>
    );
};

export default MudarTema;
