alert("Olá, seja bem vindo ao nosso jogo de escolhas para carreira de desenvolvedor front-end ou back end")

const area = prompt("Você quer seguir para qual área? front-end ou de back-end?");
let linguagem = "";

if (area === "front-end"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "back-end"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Área de carreira invalida");
}

const especializadoOuFullstack = prompt("Digite 1 para continuar se especializando na área ou 2 para seguir se desenvolvendo para se tornar Fullstack");

if (especializadoOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}`);
}
else if (especializadoOuFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Insira valor válido");
}

let mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo");
while (mensagem === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} Que tecnologia legal, bons estudos`)
    mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}