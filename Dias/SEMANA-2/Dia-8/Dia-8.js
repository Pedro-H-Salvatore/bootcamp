const olaMundo = () => {
    console.log("Olá, Mundo!");

}

olaMundo();
olaMundo();
olaMundo();

let nome;

const saudacao = () => {
    nome = prompt("Digite seu nome: ");
    console.log("Olá, " + nome + "!");
}



saudacao();

const calcularMedia = (nota1, nota2) => {
    nota1 = prompt('Digite a primeira nota: ');
    nota2 = prompt('Digite a segunda nota: ');
    const media = (nota1 + nota2) / 2;
    console.log(`aluno: ${nome}, nota 1: ${nota1}, nota 2: ${nota2}, média: ${media}`);

    return media;
}

const verificarAprovacao = (media) => {
    if (media >= 6) {
        console.log("Parabéns, você foi aprovado!", media);
    } else {
        console.log("Infelizmente, você foi reprovado.", media);
    }
}

verificarAprovacao(calcularMedia());

const registrarFilme = (nome, genero, ano, nota) => {
    nome = prompt("Digite o nome do filme: ");
    genero = prompt("Digite o gênero do filme: ");
    ano = prompt("Digite o ano de lançamento do filme: ");
    nota = parseFloat(prompt("Digite a nota do filme: "));

    if (nota >= 0 && nota <= 10) {
        console.log("Filme registrado com sucesso!")
    }else{

        console.log("Nota inválida. A nota deve ser entre 0 e 10.");
        nota = -1;

    while (nota == -1){

        nota = parseFloat(prompt("Digite a nota do filme: "));
        if (nota < 0 || nota > 10) {
        console.log("Nota inválida. A nota deve ser entre 0 e 10.");
        nota = -1;
        }
    }
            
}

    console.log(`Filme: ${nome}, Gênero: ${genero}, Ano: ${ano}, Nota: ${nota}`);
    return {nome, genero, ano, nota};
    
}

console.log(registrarFilme());