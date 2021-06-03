/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 7, 7]
total = numeros.length
let pares = 0, impares = 0

for (i = 0; i < total; i++) {
    if (numeros[i] % 2 == 0) {
        pares++
    } else {
        impares++
    }
}

console.log(pares, impares)
