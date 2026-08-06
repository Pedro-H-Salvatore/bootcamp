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

    //localStorage -> é como se fosse um banco de dados porem do navegador ou seja, tudo que o usuario fizer, vai ser salvo localmente
    //getItem -> pega o item do localStorage que possue o mesmo nome que esta sendo passado como parametro


    const favoritosSalvos = localStorage.getItem("cineexplorer:favoritos");

    if (!favoritosSalvos) {
      return [];
    }

    try {
      //JSON.parse -> transforma uma string em array
      return JSON.parse(favoritosSalvos) as TipoFilme[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "cineexplorer:favoritos",

      //Json.stringify -> transforma uma array em estring
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


