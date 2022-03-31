let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let adicionar = "sim";
while(adicionar != "não"){
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
        adicionar = prompt("Na sua lista de compras, você quer adicionar algo a mais? sim ou não?");
    } else {
        adicionar = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
    while (adicionar != "sim" && adicionar != "não" && adicionar != "remover") {
	alert("Opção não reconhecida");
        adicionar = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
    if (adicionar === "não"){
	break;
}

if(adicionar === "sim"){
    comida = prompt("Qual comida você que inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticinios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticinios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("A categoria que você citou não foi definida na lista.")
    }
} else if(adicionar === "remover"){
	if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
		alert("lista se encontra vazia!");
	} else { 
		remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
   }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);