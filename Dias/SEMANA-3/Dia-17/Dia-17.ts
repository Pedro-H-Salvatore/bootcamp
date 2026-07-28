interface Filme{
    id: number;
    nome: string;
    descricao?: string;
    nota: number;
};

const filme1: Filme = {
    id: 1,
    nome: "Batman",
    descricao: "Filme do Batman",
    nota: 9.5
};

const filme2: Filme = {
    id: 2,
    nome: "Superman",
    nota: 8.5
};



const listaFilmes: Filme[] = [filme1, filme2];


for(const filme of listaFilmes){
    console.log(`Nome: ${filme.nome}, Nota: ${filme.nota}`);
}

const filmeFormatado = listaFilmes.map((filme) => {
    return `Nome: ${filme.nome}, Descrição: ${filme.descricao || "Sem descrição"}, Nota: ${filme.nota}`;
});

console.log(filmeFormatado);
