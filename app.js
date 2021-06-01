
const livros   = require('./database')

//ordenando por idade de forma crescente
livros.sort((a,b)=> a.paginas - b.paginas)
//como pegar entradas de pessoas usuárias no terminal
//1- eu preciso importar a ferramenta readline-sync
const pegarEntrada = require('readline-sync')
//como fazer uma pergunta que vai ser respondida no terminal

const catLivro = pegarEntrada.question('Você vai escolher uma categoria?(S/N)') //pegando a nova entrada

if (catLivro.toLocaleUpperCase() === 'S'){
console.log('Essas sao as categorias de filmes:') // mostrar todos os locais disponiveis
console.log('Romance', 'Auto-Ajuda','Aventura','Ficção')
const catescolhida = pegarEntrada.question('Qual categoria voce escolheu?') 
const categorieEscolhida = livros.filter(livros => livros.categoria === catescolhida)
console.table(categorieEscolhida)
}else {
    const verLivrosRecomendados = pegarEntrada.question('Quer uma recomendação de um livro?(S/N)')
// //verificando a partir da entrada, e mostrando os próximos passos do meu sistema
    if(verLivrosRecomendados.toLocaleUpperCase() === 'S') {
    //const recomendo = true
    const recomendacoes = livros.filter(livros => livros.recomenda & livros.leu === true)
    console.log('Essas são as opções que eu recomendo')
    console.table(recomendacoes)

}
    else {
        console.log('Essas sao todas as opções de livros: ')
        console.table(livros)
}

}

const listaDeDesejos = pegarEntrada.question('Quer conhecer minha lista de desejos?(S/N)')
if (listaDeDesejos.toLocaleUpperCase() === 'S'){
    
    const desejoLer = livros.filter(livros => livros.recomenda === true & livros.leu === false)
    console.log('Adoraria ler esses livros, estou reservando um tempinho para isso, sei que não vou me arrepender ')
    console.table(desejoLer)

}else{
    console.log('Muito obrigada espero que tenha gostado da nossa lista de livros :)')
}


