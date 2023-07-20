/*# Exercício 2

Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:*/

/*a) Crie uma função que recebe os 3 arrays por parâmetro  e imprima a **quantidade de itens** de cada array (utilize o `console.log()` para cada impressão).*/
/*
const numbersA = [12, 3, 500, 12, 82]
let namesA = ["Peter", "Tiago", "Philip"]
const variousA = [31, "Hellen", "joe", "21"]

function recebe3Arrays(number, string, mix) {
    console.log(numbersA.length)
    console.log(namesA.length)
    console.log(variousA.length)
}
recebe3Arrays(numbersA, namesA, variousA)
*/

/*b) Crie outra função que recebe os 3 arrays por parâmetro e  imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.*/

/*
const numbersA = [12, 3, 500, 12, 82]
let namesA = ["Peter", "Tiago", "Philip"]
const variousA = [31, "Hellen", "joe", "21"]

function recebe3Arrays(number, string, mix) {
    console.log(numbersA[0])
    console.log(namesA[1])
    console.log(variousA[2])
}
recebe3Arrays(numbersA, namesA, variousA)
*/

/*c) Na mesma função **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve ser um booleano **true** e a segunda deve ser um booleano **false**.*/

const numbersA = [12, 3, 500, 12, 82]
let hasNum = numbersA.includes(500)

let namesA = ["Peter", "Tiago", "Philip"]
let hasNam = namesA.includes("Tiago")

const variousA = [31, "Hellen", "joe", "21"]
let hasVar = variousA.includes("21")

function recebe3Arrays(number, string, mix) {
    console.log(hasNum)
    console.log(hasNam)
    console.log(hasVar)
}
recebe3Arrays(numbersA, namesA, variousA)

/**Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.*/