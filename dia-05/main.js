let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionar = "sim";
while(adicionar != "não"){
    adicionar = prompt("Na sua lista de compras, você quer adicionar algo a mais? Sim ou Não?");
    while (adicionar != "sim" && adicionar != "não") {
        adicionar = prompt("Você deseja adicionar outra comida na sua lista? Sim ou Não?");
    }
	
    if (adicionar === "não"){
        break;
    }
	
    comida = prompt("Qual e a comida você que inserir?");
    categoria = prompt("Em que categoria a comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticinios'){
        laticinios.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else {
        alert("Informe categoria correta")
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n  `);