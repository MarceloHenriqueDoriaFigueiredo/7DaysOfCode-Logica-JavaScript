alert("Ola, Seja bem vindo a nossa calculadora aritimetica");

let primeiroValor;
let segundoValor;
let operacaoAritimetica = "";

function soma(primeiroValor, segundoValor){
    return Number(primeiroValor) + Number(segundoValor);
}
function subtracao(primeiroValor, segundoValor){
    return Number(primeiroValor) - Number(segundoValor);
}
function multiplicacao(primeiroValor, segundoValor){
    return Number(primeiroValor) * Number(segundoValor);
}
function divisao(primeiroValor, segundoValor){
    return Number(primeiroValor) / Number(segundoValor);
}

do {
    operacaoAritimetica = prompt(`Que operação você deseja realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);	
    while (operacaoAritimetica != "soma" && operacaoAritimetica != "subtração" && operacaoAritimetica != "multiplicação" && operacaoAritimetica != "divisão" && operacaoAritimetica != "sair") {
	alert("Operação invalida");
	operacaoAritimetica = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }
    if (operacaoAritimetica === "sair"){
		break;	
    }
    primeiroValor = prompt(`Insira o primeiro valor:`);
    segundoValor = prompt(`Insira o segundo valor:`);
    switch (operacaoAritimetica) {
        case 'soma':
          alert(`O resultado da ${operacaoAritimetica} é = ${soma(primeiroValor, segundoValor)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operacaoAritimetica} é = ${subtracao(primeiroValor, segundoValor)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operacaoAritimetica} é = ${multiplicacao(primeiroValor, segundoValor)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operacaoAritimetica} é = ${divisao(primeiroValor, segundoValor)}`);
            break;
    }
} 
while(operacaoAritimetica === "soma" || operacaoAritimetica === "subtração" || operacaoAritimetica === "multiplicação" || operacaoAritimetica === "divisão");

alert(`Até a próxima!`);