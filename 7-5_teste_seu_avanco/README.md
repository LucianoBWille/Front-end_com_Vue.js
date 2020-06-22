# 7-5_teste_seu_avanco

## Memorize a teoria 
1. Por que devemos reutilizar nossos componentes? O que isso nos traz de ganho?
    
    <b>Resposta:</b> pois com a reutilização de código evita-se a repetição de código e auxilia na coesão do software, devido a cada componente executar sua função. O maior ganho está na coesão e na velocidade de criar código.

Responda as questões a seguir, informando se você utilizaria: props , slots , mixins ou emit , para criar o item pedido. Além disso, justifique sua escolha.

2. Em um componente chamado slide, devemos receber um conteúdo HTML com a imagem e o texto que o slide vai apresentar.
    
    <b>Resposta:</b> slot, pois com ele é possível passar um html dentro da tag.

3. Devemos informar ao componente Resultado que o valor total da conta presente no componente Calcula se alterou. 
    
    <b>Resposta:</b> emit, pois se trata de uma atualização do dado de um componente gerado por outro.

4. Temos de receber o nome do título do componente Postagem . Além disso, também receberemos o nome do seu autor. 
    
    <b>Resposta:</b> props, pois só estamos recebento parâmetros simples, não avendo necessidade do uso do slot.

5. O sistema já tem um componente chamado Pessoa , com dados, filtros etc., e queremos criar o componente Gerente . Este vai possuir praticamente tudo o que o outro componente apresenta, logo, devemos reaproveitar o código. 
    
    <b>Resposta:</b> mixin, pois ele permite a geração de herança entre componentes, logo é possivel reaproveitar os atributos, filtros, etc. nos dois componentes.

## Na prática 
1. Crie um componente que represente um painel de confirmação. Ele receberá um título e um conteúdo personalizado, e esse conteúdo pode ser um código HTML. 
2. No componente, crie um botão que emita uma notificação quando for clicado. 
3. No App . vue , importe o componente criado e faça com que, quando seu botão for pressionado, apareça uma tag p , informando que o painel de confirmação foi fechado. 
4. Faça com que tanto o título do painel de confirmação quanto a mensagem informando que o fechamos no App . vue sejam exibidos de trás para a frente. Para isso, use essa expressão do JS: 
    ``` javascript
    valor.split('').reverse().join('')
    ```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
