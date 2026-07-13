const nome = document.getElementById("nome");
const email = document.getElementById("email");
const genero = document.getElementById("genero");
const mensagem = document.getElementById("mensagem");
const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (exibirDados) => {
    exibirDados.preventDefault();

    const dadosEmail = email.value;
    const dadosGenero = genero.value;
    const dadosMensagem = mensagem.value;


    return console.log(`Email: ${dadosEmail} \n Gênero: ${dadosGenero} \n Mensagem: ${dadosMensagem}`);

})