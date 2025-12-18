const botao_text = getElementById("abrir-texto");
const  caixa_texto = getElementById("caixa_texto");

botao_text.addEventListener("click", () => {

if(caixa_texto.style.display === "block"){
caixa_texto.style.display = "none";
} else {
  caixa_texto.style.display = "block"; }

})