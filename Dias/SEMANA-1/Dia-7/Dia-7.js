const filme = {
    nome: Batman,
    ano: 2012,
    nota: 10,

    exibirInfo(){
        console.log(`${this.nome} ${this.nota}`)
    }
}

console.log(filme.exibirInfo)