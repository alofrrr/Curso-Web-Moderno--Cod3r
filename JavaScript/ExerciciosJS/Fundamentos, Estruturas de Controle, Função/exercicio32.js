/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function vet() {
    const vetor = []
    let media = 0, total = 0

    for (i in arguments) {
        vetor[i] = arguments[i]
    }
    n = vetor.length

    for(i=0; i<n; i++){
        total += vetor[i]
    }
    media = total / n
    console.log(`No vetor existem ${n} elementos, somando ${total}, logo sua média aritmética é ${media}`)
}

vet(1, 2, 4, 50, 12, 5, 0, 2, 6, 3)
