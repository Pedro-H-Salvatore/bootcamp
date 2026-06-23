const filme = {
    nome: "Batman",
    ano: 2012,
    notas: [9, 8, 10, 10, 10],

    media() {
        let soma = 0
        let media = 0
        for (const numero of (this.notas)) {
            soma += numero
            media = soma / this.notas.length
        }
        return media
    },
    exibirInfo() {
        console.log(`${this.nome} ${filme.media()}`)
    }

}
filme.exibirInfo()
console.log(filme.media())