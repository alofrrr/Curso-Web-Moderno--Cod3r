/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.*/

function contaValor() {
    const vetor = []
    let noIntervalo = 0, foraIntervalo = 0
    for (i in arguments) {
        vetor[i] = arguments[i]
    }
    n = vetor.length
    for (i = 0; i < n; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            noIntervalo++
        } else {
            foraIntervalo++
        }
    }
    console.log(`No intervalo entre 10 e 20 estão ${noIntervalo} número(s) e fora do intervalo estão ${foraIntervalo} número(s)!`)
}

contaValor(1, 2, 3, 5, 11, 10, 18, 21, 20)

