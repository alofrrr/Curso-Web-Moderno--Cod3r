let numero = 3
{
    let numero = 4
    console.log("Dentro: ", numero)
}
console.log("fora: ", numero)

//se tiver fora do bloco tbm ele procura pra imprimir 

let numero1 = 6
{
    let numero2 = 7
    console.log("\nDentro: ", numero1)
}
console.log("fora: ", numero1)