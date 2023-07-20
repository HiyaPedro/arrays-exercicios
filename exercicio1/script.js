/* # Exercício 1

No primeiro exercício vamos praticar a **criação de arrays**. Crie 3 arrays diferentes:

- O primeiro deve possuir apenas **números**, e estes números não devem seguir nenhuma ordem específica;
- O segundo array deve possuir apenas **strings**;
- O terceiro array deve possuir **números**, **strings** e **booleanos**.

Imprima cada um dos arrays acima, utilizando `console.log()`*/

const numbers = [12, 3, 500, 12, 82]
console.log(numbers)
console.log(numbers.length)

let names = ["Peter", "Tiago", "Philip"]
console.log(names)
console.log(names[0])
console.log(names[2])

const various = [31, "Hellen", "joe", "21"]
console.log(various.includes("21"))