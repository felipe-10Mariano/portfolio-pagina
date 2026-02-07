// define duas constantes que chamam doi id, assim, se algo for moadifcado nelas aqui também muda.
const editores = ["andre"];
const SENHA_EDITOR = "portfolio2025";
const caixa_texto = document.getElementById("caixa_texto");
const botao_envia = document.querySelector(".envio_texto");

// url editor
const parametros = new URLSearchParams(window.location.search);
const paraEditores = parametros.get("editor");

// pricipais
const espacoEditor = document.querySelector(".editor");
const espacoUsuario = document.getElementById("usuario");
const caixaSenha = document.getElementById("segurancaEditor");
const inputSenha = document.getElementById("inputSenha");
const btnEntrar = document.getElementById("btnEntrarEditor");
const erroSenha = document.getElementById("erroSenha");

const editorValido = editores.includes(paraEditores);
const editorAutenticado = sessionStorage.getItem("editorAutenticado") === "true";

if (!editorValido) {
    // Visitante comum
    mostraVisitante();

} else if (editorAutenticado) {
    // Editor já logado
    ativarEditor();

} else {
    // Editor válido, mas não logado
    confirmarEditor();
}

// SECÕES PARA EDITORES, USARIOS E CLOGIN DE EDITORES.

function mostraVisitante() {
    espacoEditor.style.display = "none";
    caixaSenha.style.display = "none";
    espacoUsuario.style.display = "grid";
}

function confirmarEditor() {
    caixaSenha.style.display = "flex";
    espacoEditor.style.display = "none";
    espacoUsuario.style.display = "none";
}

function ativarEditor() {
 caixaSenha.style.display = "none";
    espacoEditor.style.display = "flex";
    espacoUsuario.style.display = "grid";
}

// BOTAO LOGIN EDITOR

if (btnEntrar) {
    btnEntrar.addEventListener("click", () => {
        if (inputSenha.value === SENHA_EDITOR) {
            sessionStorage.setItem("editorAutenticado", "true");
            ativarEditor();
        } else {
            erroSenha.style.display = "block";
        }
    });
}


// 1️⃣ Constantes
const botao_ferramentas = document.getElementById("abrir_ferramentas");
const area_trabalho = document.getElementById("ferramentas");

const botao_seccao = document.getElementById("abrir_seccao");
const opcoes_seccao = document.getElementById("caixa_seccao");

// 2️⃣ Função única de toggle
function toggleElemento(elemento) {
    elemento.classList.toggle("oculto");
}


// 3️⃣ Eventos (cada um no seu if)
if (botao_ferramentas && area_trabalho) {
    botao_ferramentas.addEventListener("click", () => {
        toggleElemento(area_trabalho);
    });
}

if (botao_seccao) {
    botao_seccao.addEventListener("click", () => {
        toggleElemento(opcoes_seccao);
    });
}

if (caixa_texto && botao_envia) {
    botao_envia.addEventListener("click", () => {
         toggleElemento(caixa_texto);
    })
}


