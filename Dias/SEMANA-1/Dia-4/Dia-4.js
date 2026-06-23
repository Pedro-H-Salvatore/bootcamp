for(let i = 1; i < 5; i++) {
    console.log("Contagem: " + i);
}


const palavara = "CineExplorer";
for(const letra of palavara) {
    console.log(letra);
}

let senha;

while(senha !== "1234") {
    senha = prompt("Digite a senha: ");
    if (senha !== "1234") {
        console.log("Senha incorreta. Tente novamente.");
    }else {
        console.log("Senha correta. Bem-vindo!");
    }

}

//filmes que o usuario coloca
for(let i = 1; i <= 10; i++) {
    let filme = prompt("Digite o nome do filme: ");
    console.log("Filme " + i + ": " + filme);
}


//filemes ja definidos
const filmes = ["O Poderoso Chefão", "Pulp Fiction", "O Senhor dos Anéis", "Matrix", "Forrest Gump"];
for(let filme of filmes) {
    console.log("Filme: " + filme);
}