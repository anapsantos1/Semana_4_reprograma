
const livros   = require('./database')


livros.sort((a,b)=> a.paginas - b.paginas)

const pegarEntrada = require('readline-sync')


const catLivro = pegarEntrada.question('Voce vai escolher uma categoria?(S/N)') 

if (catLivro.toLocaleUpperCase() === 'S'){
console.log('Essas sao as categorias de filmes:') 
console.log('Romance', 'Auto-Ajuda','Aventura','Ficçao')
const catescolhida = pegarEntrada.question('Qual categoria voce escolheu?') 
const categorieEscolhida = livros.filter(livro => livro.categoria === catescolhida)
console.table(categorieEscolhida)
}else {
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

}

const listaDeDesejos = pegarEntrada.question('Quer conhecer minha lista de desejos?(S/N)')
if (listaDeDesejos.toLocaleUpperCase() === 'S'){
    
    const desejoLer = livros.filter(livro => livro.recomenda === true & livro.leu === false)
    console.log('Adoraria ler esses livros, estou reservando um tempinho para isso ')
    console.table(desejoLer)

}else{
    console.log('Muito obrigada espero que tenha gostado da nossa lista de livros :)')
}


