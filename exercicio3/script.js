/*# Exercício 3

Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

Faça o que se pede abaixo nas **cópias** dos arrays originais:*/

/*a) Crie uma função que recebe o primeiro array como parâmetro e adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para imprimir o original e a cópia.*/
/*
const numbers = [12, 3, 500, 12, 82]
numbers.unshift(1000)

function addNum(addInício) {
    console.log(numbers)
}
addNum(numbers)
*/
/*b) Crie uma função que recebe o segundo array por parâmetro e remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.*/
/*
let names = ["Peter", "Tiago", "Philip"]
let removeLast = names.pop()

function removeLastItem(removeLastX) {
    console.log(removeLast)
}
removeLastItem(removeLast)
*/
/*c) Crie uma função que recebe por parâmetro o terceiro array e remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.*/

const various = [31, "Hellen", "joe", "21"]

function removeSecondItem(removeSecX) {
    console.log(various.splice(1))
}
removeSecondItem(various)

/**Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.*/