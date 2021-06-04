<h1 align="center"> Quarta semana de aula na Reprograma 🚀 </h1>

<h4 align="center">  Lógica aplicada - Arrays, Objetos e Métodos  </h4>



-  Essa semana aprendemos a criar e a usar Arrays, Objetos e metodo, foi difícil mas com a  metodogia da Professora Simara e depois de varios exercícios consegui entender e aplicar o que aprendi no desafio da semana.  As aulas foram ministradas em dois dias sábado das 09:00 até as 17:00 parte teórica e pratica e quarta feira das 20:00 até as 22:00 parte pratica e tiramos algumas dúvidas.



<h4> Exercícios da Semana</h4>

**Criar a estrutura do projeto:**

- app.js

- database.js

- Inicialize o npm : npm init -y

- Crie o script de start:

- Crie o script start no package.json: "scripts": { "start": "nodemon app.js" }

- Crie o .gitignore (node_modules)

- instale as dependências nodemon e readline-sync: npm i --save readline-sync nodemon

  

  1. No arquivo database criei uma base de dados no formato array de objetos contendo alguns dos livros:

```
const livros = [
    {
        nome: 'A Menina que Roubava Livros',
        categoria: 'Romance',
        paginas: 480,
        recomenda: true,
        leu: true

    }
    ]
    
    module.exports = livros
```



​         **2.** No arquivo app.js desenvolvi a  lógica para os comportamentos abaixo:



- A lista de livros foi ordenada de forma crescente por quantidade de páginas 

  ```
  livros.sort((a,b)=> a.paginas - b.paginas)
  ```



- Buscar livros pela categoria:

```
const pegarEntrada = require('readline-sync')


const catLivro = pegarEntrada.question('Voce vai escolher uma categoria?(S/N)') 

if (catLivro.toLocaleUpperCase() === 'S'){

console.log('Essas sao as categorias de filmes:') 

console.log('Romance', 'Auto-Ajuda','Aventura','Ficçao')

const catescolhida = pegarEntrada.question('Qual categoria voce escolheu?') 

const categorieEscolhida = livros.filter(livro => livro.categoria === catescolhida)

console.table(categorieEscolhida)

}
```



- Caso o usuário responda não vai entrar no ELSE, onde ele tem opção de receber ou não uma recomendação de um livro Ex.: Caso sim vai aparecer os livros que já foram lidos e estão como recomandos. Se a escolha for não aparece toda a lista de livros no database.js

```
else {

  const verLivrosRecomendados = pegarEntrada.question('Quer uma recomendaçao de um livro?(S/N)')

  if(verLivrosRecomendados.toLocaleUpperCase() === 'S') {

  const recomendacoes = livros.filter(livro => livro.recomenda & livro.leu === true)

  console.log('Essas sao as opçoes que eu recomendo')

  console.table(recomendacoes)

}

  else {

    console.log('Essas sao todas as opçoes de livros: ')

    console.table(livros)

}
```



- No final criei uma lista de desejos onde aparece somente os livros que recomendo mas não li ainda. Obs.: O usuário tambem tem a opção de sim ou não 

```
const listaDeDesejos = pegarEntrada.question('Quer conhecer minha lista de desejos?(S/N)')

if (listaDeDesejos.toLocaleUpperCase() === 'S'){

  const desejoLer = livros.filter(livro => livro.recomenda === true & livro.leu === false)

  console.log('Adoraria ler esses livros, estou reservando um tempinho para isso ')

  console.table(desejoLer)

}else{

  console.log('Muito obrigada espero que tenha gostado da nossa lista de livros :)')

}
```



***Para executar o programa usar no terminal o comando node app.js ou npm run start*** 

**Desenvolvido por: Ana Paula Lima** 

[linkedin](https://www.linkedin.com/in/ana-paula-lima-3269214b/)

[github](https://github.com/anapsantos1)







