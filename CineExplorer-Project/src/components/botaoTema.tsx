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
        <div className="fixed bottom-3 right-3 z-40 sm:bottom-5 sm:right-5">
            <button
                onClick={() => setTema((temaAtual) => !temaAtual)}
                type="button"
                aria-label={tema ? "Ativar tema claro" : "Ativar tema escuro"}
                title={tema ? "Ativar tema claro" : "Ativar tema escuro"}
                className="cursor-pointer rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm text-black shadow-lg transition-colors duration-300 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 sm:px-4 sm:py-3 sm:text-base"
            >
                {tema ? "Tema claro" : "Tema escuro"}
            </button>
        </div>
    );
};

export default MudarTema;
