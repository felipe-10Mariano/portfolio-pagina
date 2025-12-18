// define duas constantes que chamam doi id, assim, se algo for moadifcado nelas aqui também muda.
const botao_chama_text = document.getElementById("abrir_texto");
const caixa_texto = document.getElementById("caixa_texto");
const envio_texto = document.getElementsByClassName("envio_texto");

// quando o botão for crilado faz o evento dentro de ().
botao_chama_text.addEventListener("click", () => {
    // se caixa de texto estiver a mostra então aquando botão for clicado se então a caixa de texto esta a escondida então mostra.
    if (caixa_texto.style.display === "none") {
        caixa_texto.style.display === "block";
        // se não, se a caixa de texto estiver vísivel e botão envia texto for precionado então envia o texto e esconde a caixa texto.
    } else {
        if (envio_texto) {
            caixa_texto.style.display = "none";
        }
    }

    // if (caixa_texto.style.display === "block") {
    //         caixa_texto.style.display = "none";
    //     } else {
    //         caixa_texto.style.display = "block";
    //     }

})