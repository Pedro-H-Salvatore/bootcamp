let nomeFilme;
let nota;
let anoLancamento;
let genero;


nomefilme = prompt("Digite o nome do filme: ");
nota = parseFloat(prompt("Digite a nota do filme: "));
anoLancamento = parseInt(prompt("Digite o ano de lançamento do filme: "));
genero = prompt("Digite o gênero do filme: ");


if (nota >= 6 && nota < 8) {
    alert("O filme é bom!");
}else if (nota >= 8 && nota <= 10) {
    alert("O filme é excelente!");
}else {
    alert("O filme é regular!");
}

switch (genero) {
    case "ação":
        console.log("O filme é de ação!");
        break;
    case "comédia":
        console.log("O filme é de comédia!");
        break;
    case "drama":
        console.log("O filme é de drama!");
        break;
    default:
        console.log("O filme é de outro gênero!");
}