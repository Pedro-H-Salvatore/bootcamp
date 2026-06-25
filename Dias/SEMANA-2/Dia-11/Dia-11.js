const filmes = [
    { nome: "Batman: Cavaleiro das Trevas", nota: 11 },
    { nome: "Interestelar", nota: 9 },
    { nome: "Esquadrão Suícida", nota: 5 },
    { nome: "Minions", nota: 6 }]


    const filmeNumerados = filmes.map((filme, index) => {
        return(
            `${index + 1}- ${filme.nome} (${filme.nota >= 8? "filme bom" : "filme regular"})`
        )
    })

console.log(filmeNumerados)