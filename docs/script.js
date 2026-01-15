// define duas constantes que chamam doi id, assim, se algo for moadifcado nelas aqui também muda.
const botao_seccao = document.getElementById("abrir_seccao");
const opcoes_seccao = document.getElementById("caixa_seccao")
const caixa_texto = document.getElementById("caixa_texto");
const botao_envia = document.querySelector(".envio_texto");

 // pega parametros do link e verifica se exist o parametro editor, para editores 
const parametros = new URLSearchParams(window.location.search);
const paraEditores = parametros.get("editor");

const espacoEditor = document.querySelectorAll(".editor");
const espacoUsuario = document.getElementById("usuario");

if (paraEditores === "andre") {

    // Mostra a área do editor
    espacoEditor.style.display = "block";

    // Mostra área pública também
    espacoUsuario.style.display = "block";

} else {

    // Se for visitante comum, esconde editor
    espacoEditor.style.display = "none";

    // Mostra só conteúdo público
    espacoUsuario.style.display = "block";
}

// quando o botão for crilado faz o evento dentro de ().

botao_seccao.addEventListener("click", () => {

    const visivel = getComputedStyle(opcoes_seccao).display;

    // se cixa de seção está a escondida mostra e vice versa.
    if (visivel === "none") {
            opcoes_seccao.style.display = "block"; 
        } else {
            opcoes_seccao.style.display = "none";
        }
})

botao_envia.addEventListener("click", () => {
   caixa_texto.style.display = "none";
})

botao_seccao.addEventListener("click", () => {
    
})


// eu estou fazendo uma modificações no botões como, agora vai vir section primeiro depois texto, então pensei em criar mai uma coisa ante da caixa. Criar uma caixa para section:eu clico no botão seção abre uma aba onde tem criar uma nova section ou section existente. \\