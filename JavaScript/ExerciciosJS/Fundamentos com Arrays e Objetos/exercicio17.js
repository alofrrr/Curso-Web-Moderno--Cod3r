/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.*/

function somaArray(vetor) {
    let total = 0

    for (i = 0; i<vetor.length; i++) {
        total += vetor[i]
    }
    console.log(total)
}

somaArray([10, 10, 10])
