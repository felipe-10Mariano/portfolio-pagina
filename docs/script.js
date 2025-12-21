// define duas constantes que chamam doi id, assim, se algo for moadifcado nelas aqui também muda.
const botao_seccao = document.getElementById("abrir_seccao");
const opcoes_seccao = document.getElementById("caixa_seccao")
const caixa_texto = document.getElementById("caixa_texto");
const botao_envia = document.querySelector(".envio_texto");
 

// quando o botão for crilado faz o evento dentro de ().

botao_seccao.addEventListener("click", () => {
    // verifica se a caixa seccao está escondida ou a amotra.
   const seccao_visivel = opcoes_seccao.style.display = "none";
   
   
    if (opcoes_seccao.style.display === "none") {
            opcoes_seccao.style.display = "block";
        } else {
            opcoes_seccao.style.display = "none";
        }
})

botao_envia.addEventListener("click", () => {
   caixa_texto.style.display = "none";
})

botao_section.addEventListener("click", () => {
    
})


// eu estou fazendo uma modificações no botões como, agora vai vir section primeiro depois texto, então pensei em criar mai uma coisa ante da caixa. Criar uma caixa para section:eu clico no botão seção abre uma aba onde tem criar uma nova section ou section existente. \\