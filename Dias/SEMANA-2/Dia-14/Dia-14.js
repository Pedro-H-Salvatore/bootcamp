const inputUsuario = document.querySelector(".BarraDePesquisa");
const botaoSubmit = document.querySelector(".botao");
const resultado = document.querySelector(".Conteudo");

botaoSubmit.addEventListener("click", async function exibirFilme() {
  const nomeFilme = inputUsuario.value;
  const apiKey = "Sua_Chave"
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${nomeFilme}&language=pt-BR`;
  
  const resposta = await fetch(url)
  const dados = await resposta.json()

  const filmes = dados.results

  resultado.innerHTML = filmes.map((filme) => {
    return`
        <div class="containerFilme">
            <div class= "filme">
                <h2>${filme.title}</h2>
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="imagemFilme">
                <p>${filme.overview}</p>
            </div>
        </div>
    `
  }).join("");

  console.log(nomeFilme);
});

