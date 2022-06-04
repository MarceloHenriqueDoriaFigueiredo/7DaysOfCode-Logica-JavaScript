const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagemDeProgramação = prompt("Qual linguagem de programação você esta estudando?");

const mensagem = (`Ola ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemDeProgramação}`);
alert(mensagem);

const resposta = prompt(`Você gosta de estudar ${linguagemDeProgramação}? responda com o número 1 para SIM ou 2 para NÃO`);

if (resposta == 1){
    alert("Muito bom!, continue estudando e você tera muito sucesso")
} else if (resposta == 2){
    alert ("Ah que pena... Já tentou aprender outras linguagens?")
}