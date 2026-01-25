// define duas constantes que chamam doi id, assim, se algo for moadifcado nelas aqui também muda.
const editores = ["andre"];
const SENHA_EDITOR = "portfolio2025";
const area_trabalho = document.getElementById("ferramentas")
const botao_ferramentas = document.getElementById("abrir_ferramentas");
const botao_seccao = document.getElementById("abrir_seccao");
const opcoes_seccao = document.getElementById("caixa_seccao")
const caixa_texto = document.getElementById("caixa_texto");
const botao_envia = document.querySelector(".envio_texto");

// pega parametros do link e verifica se exist o parametro editor, para editores 
const parametros = new URLSearchParams(window.location.search);
const paraEditores = parametros.get("editor");

const espacoEditor = document.querySelector(".editor");
const espacoUsuario = document.getElementById("usuario");
const caixaSenha = document.getElementById("segurancaEditor");
const inputSenha = document.getElementById("inputSenha");
const btnEntrar = document.getElementById("btnEntrarEditor");
const erroSenha = document.getElementById("erroSenha");



function ativarEditor() {
    caixaSenha.style.display = "none";
    espacoEditor.style.display = "flex";
    espacoUsuario.style.display = "grid";
}

// Verifica se o editor está na lista
if (editores.includes(paraEditores)) {

    // Mostra a caixa de senha 
    caixaSenha.style.display = "flex";
    espacoEditor.style.display = "none";
    espacoUsuario.style.display = "none";
    // Quando clicar no botão "Entrar"
    btnEntrar.addEventListener("click", () => {

        // Verifica se a senha está correta
        if (inputSenha.value === SENHA_EDITOR) {

            // Guarda que o editor foi autenticado
            sessionStorage.setItem("editorAutenticado", "true");

            ativarEditor();

        } else {
            // Mostra erro
            erroSenha.style.display = "block";
        }
    });

    // Se já estiver autenticado nessa sessão
    if (sessionStorage.getItem("editorAutenticado") === "true") {
        ativarEditor();
    }

} else {
    // Visitante comum
    espacoEditor.style.display = "none";
    espacoUsuario.style.display = "grid";
}


// quando o botão for crilado faz o evento dentro de ().

botao_ferramentas.addEventListener("click", () => {

    //pega o valor amostra ou econdido e esconde ou mostra um objeto
    const visivel = getComputedStyle(area_trabalho).display;

    if (visivel === "none") {
        area_trabalho.style.display = "block";
    } else {
        area_trabalho.style.display = "none";
    }

})


botao_seccao.addEventListener("click", () => {

    //pega o valor amostra ou econdido e esconde ou mostra um objeto.
    const visivel = getComputedStyle(opcoes_seccao).display;

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


