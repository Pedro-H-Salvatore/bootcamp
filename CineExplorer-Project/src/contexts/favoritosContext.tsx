import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { TipoFilme } from "../types/tipoFilme";


type TipoFavortioContext = {
  favoritos: TipoFilme[],
  adicionarFavorito: (filme: TipoFilme) => void,
  removerFavoritos: (id: number) => void,
  estaFavoritado: (id: number) => boolean,
}

type FavoritoProviderProps = {
  children: ReactNode
}

const FavoritoContext = createContext<TipoFavortioContext | undefined>(undefined);

export function FavoritosProvider({ children }: FavoritoProviderProps) {
  const [favoritos, setFavoritos] = useState<TipoFilme[]>(() => {
    const favoritosSalvos = localStorage.getItem("cineexplorer:favoritos");

    if (!favoritosSalvos) {
      return [];
    }

    try {
      return JSON.parse(favoritosSalvos) as TipoFilme[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "cineexplorer:favoritos",
      JSON.stringify(favoritos),
    );
  }, [favoritos]);

  function adicionarFavorito(filme: TipoFilme) {
    setFavoritos((favoritosAtuais) => {
      const jaExiste = favoritosAtuais.some(
        (favorito) => favorito.id === filme.id,
      );

      if (jaExiste) {
        return favoritosAtuais;
      }

      return [...favoritosAtuais, filme];
    });
  }

  function removerFavoritos(id: number) {
    setFavoritos((favoritosAtuais) => favoritosAtuais.filter((filme) => filme.id !== id),)
  }

  function estaFavoritado(id: number) {
    return favoritos.some((filme) => filme.id === id)
  }

  return (
    <FavoritoContext.Provider
      value={{
        favoritos,
        adicionarFavorito,
        removerFavoritos,
        estaFavoritado
      }}
    >
      {children}
    </FavoritoContext.Provider>
  )
}

export function useFavoritos() {
  const contexto = useContext(FavoritoContext);

  if (contexto === undefined) {
    throw new Error("usefavoritos precisa estar dentro do FavoritoProvider")
  }
  return contexto
}


