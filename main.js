let dadosButtonTeste = document.getElementById("button-teste");

dadosButtonTeste.addEventListener("click", teste1)

function teste1(){
    let dadosCampoSenha = document.getElementById("campo-senha");
    let valor1 = dadosCampoSenha.value;
    console.log(valor1);
}
