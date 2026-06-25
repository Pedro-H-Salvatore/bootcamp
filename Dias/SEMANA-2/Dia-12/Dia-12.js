const filmes = [
    { nome: "Batman: Cavaleiro das Trevas", nota: 11 },
    { nome: "Interestelar", nota: 9 },
    { nome: "Esquadrão Suícida", nota: 5 },
    { nome: "Minions", nota: 6 }]

const melhoresFilmes = filmes.filter((filme) => filme.nota > 8)
const pioresFilmes = filmes.filter((filme) => filme.nota <=6)

console.log(melhoresFilmes.nome)
console.log(pioresFilmes.nome)