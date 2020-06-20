# 4-3_teste_seu_avanco

## Memorize a Teoria
<b>1. Para que ser o atributo <i>data</i> de um componente?</b>

<b>Resposta:</b> Para salvar os dados relacionados ao componente.

<b>2. O que são diretivas? Defina cada diretiva a seguir:
- v-once
- v-if
- v-text
- v-for
- v-model
- v-on (@)
- v-bind (:)</b>

<b>Resposta:</b> Diretivas são manipuladores de template, usados como atributos do HTML.

<u>v-once:</u> Mostra os dados apenas uma vez, ou seja, destiva a reatividade do elemento.

```html
<p v-once v-text="valor"></p> 
```

<u>v-if:</u> Controla o que é mostrado, ocultando ou exibindo um elemento de acordo com o valor da condição.

```html
<p v-if="condicao" v-text="valor"></p> 
```

<u>v-text:</u> exibe os valores dos dados, pode ser usado como 
```html
<p v-text="valor"></p> 
``` 
ou

```html
<p>{{valor}}</p> 
```

<u>v-for:</u> Percorre dados, quando se tem um lista de dados e pretende-se exibi-los ao contrario de criar uma tag para cada valor, pode-se usar esta diretiva para criar uma lista dinamica de tags de acordo com os elemento da lista.

```html
<p v-for="valor in valores" v-text="valor"></p> 
```

<u>v-model:</u> Víncula um elemento da interface com um atributo, muito usado com o input, possibilitando a captura do valor inserido. 

```html
<input v-model="entrada" type="text"></input> 
```

<u>v-on:</u> Respnsável por invocar eventos, funciona como uma escuta para os elementos na tela, podendo assim executar determinadas ações de acordo com o que o usuário realizar.

```html
<div v-on:click="alert('Você clicou')">Clique aqui para exibir alerta</div>
```
ou
```html
<div @click="alert('Você clicou')">Clique aqui para exibir alerta</div>
```

<u>v-bind:</u> Usado par adicionar detalhes à página.O v-bind (ou ':') gera um mapeamento dos atributos do HMTL, podendo estes ser personalizados ou padrões do HTML, podendo se assim atribuir valor de variaveis do data. 

```html
<input v-bind:disabled="condição" type="text"></input> 
```
ou
```html
<input :disabled="condicao" type="text"></input> 
```

## Na Prática
1. Com a diretiva que mostra um dado na tela, crie um atributo chamado <i>nome</i> com um valor inicial igual a <i>Mané Garrincha</i> e exiba-o na tela.
2. Usando o <i>setTimeout</i>, altere o conteúdo de <i>nome</i> para <i>Mineirão</i> quatro segundos após o componente ser montado.
3. Crie uma tag <i>small</i> mostrando o conteúdo da variável <i>nome</i> no seu estado inicial. Faça com que, mesmo depois dos quatro segundos, ela continue exibindo o nome <i>Mané Garrincha</i>.
4. Crie um botã que apague a tag <i>small</i> quando ela estiver na tela e mostre-a quando não estiver. Use a deiretiva <i>v-if</i> e <i>v-on</i> para isso.
5. Habilite o botão criado anteriormente apenas após passarem os quatro segundos do nosso <i>setTimeout</i>.
6. Crie um <i>input</i> que lhe permita editar o conteúdo da variável <i>nome</i>.
7. Declare um <i>Array</i> chamado <i>cadeiras</i> e coloque os seguintes valores nele: 
- 30.000 brancas
- 30.000 cinzas
- 10.000 vips

    Mostre esses dados na tela para o usuário dentro de uma lista <i>ul</i>.

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
