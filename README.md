# CineExplorer

Aplicação web para descobrir filmes, navegar por gêneros, pesquisar títulos e montar uma lista de favoritos. O projeto consome dados da API do [The Movie Database (TMDB)](https://www.themoviedb.org/) e foi desenvolvido com React, TypeScript, Tailwind CSS e Vite.

## Funcionalidades

- Catálogo organizado em Ação, Comédia, Terror/Suspense e Romance
- Busca de filmes pelo título
- Exibição de capa, sinopse, data de lançamento e avaliação
- Modal com informações detalhadas do filme selecionado
- Adição e remoção de filmes da lista de favoritos
- Página dedicada aos filmes favoritos
- Navegação entre Home, Filmes, Buscar, Favoritos e Contato
- Interface em tema escuro

> Atualmente, os favoritos são mantidos no estado da aplicação e são apagados ao recarregar a página.

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [TMDB API](https://developer.themoviedb.org/docs/getting-started)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## Como executar o projeto

### Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/)
- npm, incluído na instalação do Node.js
- Uma chave de API do [TMDB](https://www.themoviedb.org/settings/api)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Pedro-H-Salvatore/bootcamp.git
```

2. Entre na pasta da aplicação:

```bash
cd bootcamp/CineExplorer-Project
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz de `CineExplorer-Project`:

```env
VITE_TMDB_API_KEY=SUA_CHAVE_DA_TMDB
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

6. Abra o endereço exibido no terminal, normalmente `http://localhost:5173`.

> Nunca envie o arquivo `.env` ou sua chave real para o GitHub.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica o TypeScript e gera a versão de produção |
| `npm run preview` | Abre localmente a versão de produção |
| `npm run lint` | Analisa o código com o Oxlint |

## Estrutura principal

```text
CineExplorer-Project/
├── src/
│   ├── assets/        # Imagens utilizadas nas páginas
│   ├── components/    # Busca, cards, modal, seções e footer
│   ├── contexts/      # Estado compartilhado dos favoritos
│   ├── types/         # Tipos das respostas e dos filmes
│   ├── App.tsx        # Definição das rotas
│   ├── home.tsx       # Página inicial
│   ├── filmes.tsx     # Catálogo por gêneros
│   ├── busca.tsx      # Página de pesquisa
│   ├── favoritos.tsx  # Lista de favoritos
│   └── contato.tsx    # Página de contato
├── .env               # Variáveis locais; não deve ser versionado
├── package.json
└── vite.config.ts
```

## Autor

Desenvolvido por **Pedro Henrique Salvatore**.

- [GitHub](https://github.com/Pedro-H-Salvatore)
- [LinkedIn](https://www.linkedin.com/in/pedro-salvatore-a4a2763b7/)

## Créditos

Este produto utiliza a API do TMDB, mas não é endossado nem certificado pelo TMDB.
