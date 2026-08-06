import { useEffect, useState } from "react";
import type { TipoFilme } from "../types/tipoFilme";
import ModalCardFilme from "./modalCardFilme";
import type { RespostaTMDB } from "../types/respostaTMDB";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

type SecaoFilmesProps = {
    title: string;
};





const CardsFilmes = ({ title }: SecaoFilmesProps) => {
    const [filmes, setFilmes] = useState<TipoFilme[]>([]);
    const [filmeSelecionado, setFilmeSelecionado] = useState<TipoFilme|null>(null)

    let ids: number[] = [];

    if (title === "Ação") {
        ids = [28];
    } else if (title === "Comédia") {
        ids = [35];
    } else if (title === "Terror/Suspense") {
        ids = [27, 53];
    } else if (title === "Romance") {
        ids = [10749];
    }

    const idsFormatada = ids.join("|");

    const apiURL =
        `https://api.themoviedb.org/3/discover/movie` +
        `?api_key=${apiKey}` +
        `&with_genres=${idsFormatada}` +
        `&language=pt-BR`;

    useEffect(() => {
        async function buscarFilme() {
            try {
                const resposta = await fetch(apiURL);

                if (!resposta.ok) {
                    throw new Error("Não foi possível buscar os filmes");
                }

                const dados: RespostaTMDB = await resposta.json();
                const filmesLimitados = dados.results.slice(0, 8);

                setFilmes(filmesLimitados);
            } catch (error) {
                console.error(
                    `Erro ao procurar filmes da seção ${title}:`,
                    error,
                );
            }
        }

        buscarFilme();
    }, [apiURL, title]);

    const fecharModal = () => {
        setFilmeSelecionado(null)
    }

    const filmesEmCatalogo = filmes.map((filme) => (
        
        <div key={filme.id} 
        onClick={() => setFilmeSelecionado(filme)} className="shrink-0 cursor-pointer">
            {filme.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} 
                alt={`Capa do filme ${filme.title}`} 
                className="h-auto w-28 shrink-0 rounded-lg sm:w-32 md:w-40"/>)
                : (<p className="text-zinc-950 dark:text-white">Imagem indisponível</p>)}
        </div>
    ));

    return (
        <div>
            <div className="flex w-full justify-start gap-3 overflow-x-auto px-3 py-4 sm:gap-4 sm:px-4 lg:justify-between">
                {filmesEmCatalogo}
            </div>
            {filmeSelecionado && (
                <ModalCardFilme
                filmeSelecionado={filmeSelecionado}
                fecharModal={fecharModal}
                />
            )}
        </div>
    );
};

export default CardsFilmes;
