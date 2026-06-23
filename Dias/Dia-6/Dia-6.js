
const series = ["Black Mirror", "Flash", "Suits", "Breaking Bad"]
const notas = [9, 8, 6, 4, 7, 9]



function somar(lista){
    
    let soma = 0
for (numero of lista)
    soma = soma + numero
    return soma;
}

function media(soma){
    const media = soma / notas.length
    return media
}
console.log(somar(notas))
console.log(media(somar(notas)))


const notasBaixas = notas.filter((notas) => notas < 6)
const notasAsltas = notas.filter((notas) => notas > 7)
const resto = notas.filter((notas) => notas >= 6 && notas <= 7)

console.log(notas)
console.log(notasBaixas)
console.log(notasAsltas)
console.log(resto)

const filmes = [
    { nome: "Batman: Cavaleiro das Trevas", nota: 11 },
    { nome: "Interestelar", nota: 9 },
    { nome: "Esquadrão Suícida", nota: 5 },
    { nome: "Minions", nota: 6 }]

const FilmeNome = ["Batman: Cavaleiro das Trevas","Interestelar","Esquadrão Suícida","Minions"]
const melhorFilme = filmes.find((filme) => filme.nota > 9)
const melhoresfilmes = filmes.filter((filme) => filme.nota >= 8)


console.log(melhoresfilmes)
console.log(melhorFilme)
console.log(filmes)
// console.log(filmes.at(0))

let contador = 0 
for (const nome of FilmeNome){
    console.log(`[${contador}] ${nome}`)
    contador++
}


    
    