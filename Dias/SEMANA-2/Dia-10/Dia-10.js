const filmes = [
    { nome: "Batman: Cavaleiro das Trevas", nota: 11 },
    { nome: "Interestelar", nota: 9 },
    { nome: "Esquadrão Suícida", nota: 5 },
    { nome: "Minions", nota: 6 }]


const melhorFilme = filmes.find((filme) => filme.nota > 9)
const piorFilme = filmes.find((pior)=> pior.nota <6) 

console.log(melhorFilme.nome)
console.log(piorFilme.nome)