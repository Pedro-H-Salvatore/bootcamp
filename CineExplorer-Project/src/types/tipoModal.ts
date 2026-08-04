import type { TipoFilme } from "./tipoFilme"

export type TipoModal = {
    filmeSelecionado: TipoFilme;
    fecharModal: () => void;
}