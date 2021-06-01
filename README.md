<h1 align="center"> Quarta semana de aula na Reprograma 🚀 </h1>

<h4 align="center">  Lógica aplicada - Arrays, Objetos e Métodos  </h4>

![alt text ](https://acegif.com/wp-content/uploads/cat-typing-1.gif)



-  Esta semana aprendemos a criar funções e condicionais For e While. Tivemos uma aula maravilhosa com a professora Simara Conceição que passou vários exemplos, exercícios para fixar o conteúdo. As aulas foram ministradas em dois dias sábado das 09:00 até as 17:00 parte teórica e pratica e quarta feira das 20:00 até as 22:00 parte pratica e tiramos algumas dúvidas.



<h5> Exercícios da Semana</h5>

1 - No primeiro exercicio utilizei o **FOR** para criar um algoritmo que imprime os valores de 10 a 60 iterando a cada 5, exceto para os numeros de 35 e 45 que são substituidos pela palavra "PULO"

```
for(let i = 10; i<=60; i+=5){

    if(i === 35 || i === 45){
    
        console.log("PULOU")
        continue
    } 
    
    console.log(i)

}
```



2 - No segundo exercício criei um algoritmo utilizando **function** para converte dias em horas, quando recebe um número de dias.

```
function converDaysInHoras(qtdDias){
    let horas = 24
    let resultado = qtdDias * horas
    return resultado
}

console.log(`Dias convertidos em Horas: ${converDaysInHoras(3)} horas`)
```



3 - Criei uma **function** que recebe 2 parâmetros e retorna o resultado da divisão entre eles, alem disso ela deve informar se o numero é par se o resto da divisão for zero.

```
function divisao(num1,num2){
    let resultado = num1/num2;

    if(resultado % 2 === 0){
        return `O resultado da divisão é um numero par:${resultado}`
    }else{
        return `O resultado da divisão é: ${resultado}`
    
    }

}

console.log(divisao(13,5))
```



4 - Atraves da estrutura de repetição **For** para imprimir no console conforme instruções abaixo: 

Nesse exercício usamos as palavras reservadas **BREAK** e **CONTINUE**

​    a) números de 1 a 100  

```
for(let i = 1; i<=100; i++){
    

    console.log(i)
        
    }
```



​    b) quando chegar no número 50 interrompa a instrução e pare o loop 

```
for(let b = 1; b<=100; b++){
    

    if(b === 51){
    
        console.log("PULOU")
        break
    
    } 
    
    console.log(b)

}

```



 c) quando chegar no número 50 pule a instrução 

```
for(let c = 1; c<=100; c++){
    
    

    if(c === 50){
    
        console.log("PULOU")
        continue
        
    } 
    console.log(c)

}
```

5 - Criei uma calculadora com as 4 operações matemáticas básicas só pra treinar.

As condições

a) Deve ser possível escolher uma operação aritmética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'

b) Deve ser possível passar 2 números para a operação escolhida

c) Deve retornar o resultado e imprimir no console

```
let resultado = 0
function conta(Calcular, num1, num2){
    

    switch(Calcular){
        case 'soma':
            resultado = num1 + num2
            break
        
        case 'multiplicacao':
            resultado = num1 * num2
            break
        case 'divisao':
            resultado = num1 / num2
            break
        case 'subtracao':
            resultado = num1 - num2
            break
        default:
            console.log('informe uma operação valida, para isso usar as palavras: soma, multiplicacao, divisao e subtracao para realizar a operação ') 

    }
    return `O resultado da ${Calcular}: ${resultado}`

}

console.log(conta('soma',2,2))
console.log(conta('multiplicacao',2,2))
console.log(conta('divisao',2,2))
console.log(conta('subtracao',2,2))
conta('1000',2,2)
```

