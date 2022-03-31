# 7DaysOfCode-Logica-JavaScript
![image](https://user-images.githubusercontent.com/68343463/161039737-118291ba-b8b1-4a84-aab7-058e0671cb0e.png)

# Desafio: Dia 04

Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

# Dica

 Pense muito bem em qual estrutura de repetição você irá utilizar para fazer o seu programa ser executado até o momento em que as 3 tentativas acabem, ou até a pessoa acertar o número.

Lembre-se que você pode sempre personalizar o seu programa da forma que quiser.

Não se esqueça de compartilhá-lo no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda. 

# Extra

Dê uma olhada nesse site para  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration?utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+L%C3%B3gica+JS+4%2F7%3A+Mais+loops+e+randomiza%C3%A7%C3%A3o&utm_campaign=%5BALURA+%237days+Of+Code%5D+%28L%C3%B3gica+de+Programa%C3%A7%C3%A3o+-+JavaScript%29+Dia+4%3A+Mais+loops+e+randomiza%C3%A7%C3%A3o">aprender mais sobre estruturas de repetição.</a> 

Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado Math.random().

Para isso, utilize o código:

```
Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
```

Onde, claro, você terá que alterar os valores de mínimo e máximo pelos limites inferior e superior, respectivamente.

Você pode ler mais sobre a Math.random()  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random?utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+L%C3%B3gica+JS+4%2F7%3A+Mais+loops+e+randomiza%C3%A7%C3%A3o&utm_campaign=%5BALURA+%237days+Of+Code%5D+%28L%C3%B3gica+de+Programa%C3%A7%C3%A3o+-+JavaScript%29+Dia+4%3A+Mais+loops+e+randomiza%C3%A7%C3%A3o">nesse site</a> 
