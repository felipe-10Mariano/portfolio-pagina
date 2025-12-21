// define duas constantes que chamam doi id, assim, se algo for moadifcado nelas aqui também muda.
const botao_seccao = document.getElementById("abrir_texto");
const caixa_texto = document.getElementById("caixa_texto");
const botao_envia = document.querySelector(".envio_texto");
const botao_section = document.querySelector("section");
 
caixa_texto.style.display === "none";

// quando o botão for crilado faz o evento dentro de ().

botao_seccao.addEventListener("click", () => {
    // verifica se a caixa de texto está escondida ou a amotra.
   
   
   
    // if (caixa_texto.style.display === "none") {
    //         caixa_texto.style.display = "block";
    //     } else {
    //         caixa_texto.style.display = "none";
    //     }
})

botao_envia.addEventListener("click", () => {
   caixa_texto.style.display = "none";
})

botao_section.addEventListener("click", () => {
    
})