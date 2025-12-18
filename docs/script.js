// define duas constantes que chamam doi id, assim, se algo for moadifcado nelas aqui também muda.
const botao_text = getElementById("abrir-texto");
const caixa_texto = getElementById("caixa_texto");


// quando o botão for crilado faz o evento dentro de ().
botao_text.addEventListener("click", () => {
// se caixa de texto estiver a mostra então aquando botão for clicado ela escondera e vice versa.
    if (caixa_texto.style.display === "block") {
        caixa_texto.style.display = "none";
    } else {
        caixa_texto.style.display = "block";
    }

})