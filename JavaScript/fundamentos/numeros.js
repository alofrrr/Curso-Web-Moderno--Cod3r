const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 3.2

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

const avaliacao1 = 9871
const avaliacao2 = 6871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(total)
console.log(media)

//Função .toFixed() serve para restringir casas decimais
//Função .toString() serve para converter em string

console.log(media.toString())

//Se quiser transformar a string em um valor binario é so colocar toString(2).

console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)

//Number é função, number tipo do dado.