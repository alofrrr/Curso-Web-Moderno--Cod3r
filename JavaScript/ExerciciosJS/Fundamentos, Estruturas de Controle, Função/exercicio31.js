/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/


function vet() {
    const vetor = []
    let negativos = 0

    for (i in arguments) {
        vetor[i] = arguments[i]
    }
    n = vetor.length

    for (i = 0; i < n; i++) {
        if (vetor[i] < 0) {
            negativos += 1
        }
    }
    console.log(`Existem ${negativos} número(s) negativo(s) no vetor.`)
}

vet(1, 2, 4, -6, 50, 12, 5, 0, 2, 6, -3, -8)
