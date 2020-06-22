# 8-8_teste_seu_avanco

## Memorize a teoria 
1. O que são rotas? Quando devemos usá-las?

    <b>Resposta:</b> Rotas são os caminhos/URLs do sistema. Devemos usa-las quando possuímos um sistema que deve ter mais de uma tela, assim pdoemos diferencia-las.

2. Quais são as desvantagens de se usar a hash em URLs de um sistema?

    <b>Resposta:</b> O algoritmo de SEO não encherga as páginas que estão após o hash e tbm que o url não se torna amigável, dificultando sua digitação e memorização.

3. Quando devemos usar sub-rotas? 

    <b>Resposta:</b> Devemos usar subrotas para mostrar sub tarefas de uma tela.

## Na prática 
Para realizar esses exercícios, crie um novo projeto, e instale e configure o Vue-router.
1. Ao acessar a página inicial do sistema, faça com que o componente Home seja chamado e exiba um título com o texto Bem-vindo ao blog . 
2. Faça com que a rota /postagens exiba um componente chamado Lista . Ele deve ter uma lista de links de rotas indo para as rotas /postagens/id , em que id é um número que identifica um post.
3. Faça um menu superior, trocando entre / e /postagens . 


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
