alert("Olá, seja bem vindo ao jogo de adivinhar um numero! Nesse jogo o maximo de tentativas que você ira ter sera de 3 chances.")
var numeroPensado = 10;
var tentativas = 1;
var acertou = false;

while (tentativas <= 3){
    var chute = prompt("Qual numero você escolhe? ");
    if (chute == numeroPensado){
            alert(`Parábens você acertou, o numero era ${numeroPensado}`)
            acertou = true;
            break;
        }
        tentativas++;
    }
    if(acertou == false) {
        alert(`Você errou o numero pensado era ${numeroPensado} `)
}