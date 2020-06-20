# 5-5_teste_seu_avanco

## Memorize a teoria 

Para as perguntas a seguir, responda se você faria algo usando <i>métodos</i>, <i>filtros</i>, <i>propriedades computadas</i> ou <i>observadores</i>. 
1. Vamos imaginar um componente no qual você tenha as variáveis nome e sobrenome. Qual maneira vista para manipular dados você usaria para exibir o nome completo na tela? Explique-se.

    <b>Resposta:</b> Propriedade Computada, pois é a forma mais otimizada de realizar a tarefa, por executar a junção das duas variáveis, permitindo a criação de um computed nomeCompleto, podendo ser chamado como um variável qualquer.
2. Caso você tenha uma variável do tipo double, deve formatá-la e exibi-la como reais (R$). O que você usaria para formatar esse dado? Justifique. 

    <b>Resposta:</b> Filtro, pois só é necessário realizar uma formatação no valor.

3. Imaginando que temos uma variável que representa a hora do sistema, quando ela se alterar, automaticamente você terá de ver se os minutos atuais são 00 ou 30, para então tomar uma ação. O que você usaria para solucionar esse problema? Justifique. 

    <b>Resposta:</b> Observadores e métodos, pois os observadores são acionados sempre que há uma alteração na variável a qual ele estiver ligado, podendo assim chamar um método para realizar a ação necessária.
4. Temos uma tag a em um componente e, ao passar o mouse em cima dela, o sistema deve exibir um alerta na tela. O que utilizaríamos para exibir esse alerta? Por quê? 

    <b>Resposta:</b> Método, pois se trata de uma ação, que é executada a partir de uma excuta na tag a.

## Na prática 
1. Crie um input, que represente a variável nome, e abaixo dele uma tag small, que exiba o valor da variável status iniciada valendo 'Digite seu nome acima'. 
2. Faça com que, ao apertarmos um botão, seja exibido um alert 'olá, ' concatenado com o valor da variável nome. 
3. Com um observador, faça com que, ao estarmos digitando no input, o valor da variável status seja 'Recebendo seu nome...'. Ao terminar a digitação, faça com que o valor da variável status seja vazio. 
4. Após o término da digitação, exiba o nome digitado com letras maiúsculas. 
5. Também após a digitação, faça com que seja exibida a quantidade de caracteres do nome digitado. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
