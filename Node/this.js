console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)


}
//cuidando onde ta acessando yhis pois se for em uma função voce esta acessando o escopo global e se for fora é o module exports
logThis()