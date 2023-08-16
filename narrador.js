
const texto = document.querySelector("#texto");

const falar = new SpeechSynthesisUtterance();
falar.lang = "pt-br";

document.querySelector("#falar").addEventListener("click", () => {
    
    validar();
});
// Parar
document.querySelector("#parar").addEventListener("click", () => {
    speechSynthesis.cancel();
});
// Limpar
document.querySelector("#limpar").addEventListener("click", () => {
    texto.value = "";
    texto.focus();
});

function validar(){
    if(texto.value === ''){
        texto.className = 'erro';
        texto.focus();
    }else{
        texto.className = 'certo';
        falar.text = texto.value
        speechSynthesis.speak(falar);
    }   
}
