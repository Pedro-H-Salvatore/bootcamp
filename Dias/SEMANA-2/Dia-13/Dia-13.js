
const nomeFilme =  "Batman";
const apiKey = "Sua_Chave"
async function buscarFilme() {
  const resposta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${nomeFilme}&language=pt-BR`);
  const dados = await resposta.json();

  const filmeFormatado = dados.results.map((filme) => {
    return{
      titulo: filme.title,
      ano: filme.release_date,
      avaliacao: filme.vote_average

    }
  })

  console.log(filmeFormatado);
}

buscarFilme();