# 7DaysOfCode-Logica-JavaScript
![image](https://user-images.githubusercontent.com/68343463/161041964-654666c1-d4ca-428d-abcc-a7222c347176.png)

# Desafio: Dia 06

Sabe o programinha que você criou ontem para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!

Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.

# Dica

Você pode fazer a procura do elemento que a pessoa deseja apagar da forma que quiser, usando métodos do Javascript para isso.

Existe o método .includes(elemento), que retorna true ou false se o array em questão contém o tal elemento ou não.

Existe também o método .indexOf(elemento), que retorna a posição desse elemento dentro do array, ou -1, caso não o encontre.

Já para a remoção em si, existem diferentes métodos. O método o shift, por exemplo, remove sempre o primeiro item da lista; o método pop remove o último; já o método splice remove um certo número de itens a partir de uma determinada posição. Escolha o que você achar que faz mais sentido para o seu programinha.

# Extra

Para aprender mais sobre métodos para arrays no Javascript, dê uma olhada  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array?utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+L%C3%B3gica+JS+6%2F7%3A+%F0%9F%91%A9%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BB+Remo%C3%A7%C3%A3o+de+Arrays&utm_campaign=%5BALURA+%237days+Of+Code%5D+%28L%C3%B3gica+de+Programa%C3%A7%C3%A3o+-+JavaScript%29+Dia+6%3A+Remo%C3%A7%C3%A3o+de+Arrays">nesse site</a>

Lembre-se que você pode sempre personalizar o seu programinha da maneira que achar melhor, e não se esqueça de compartilhá-lo no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda.
