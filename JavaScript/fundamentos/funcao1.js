//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma('ana ', 'laura')

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 6, 7, 4, 7)
imprimirSoma()

//função com retorno
function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
