/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/


function numsparesIndicesPares(numeros) {

    let numerosParesComIndicesPares = []

    for (i = 0; i < numeros.length; i += 2) {
        if (numeros[i] % 2 == 0) {
            numerosParesComIndicesPares.push(numeros[i])
        }
    }
    console.log(numerosParesComIndicesPares)
}

numsparesIndicesPares([10, 70, 22, 43])

