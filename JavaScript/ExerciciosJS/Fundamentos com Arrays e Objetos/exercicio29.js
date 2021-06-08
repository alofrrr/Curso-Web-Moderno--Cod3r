/*Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.*/


function segundoMaiorNum(vetor) {
    let maiorNum = vetor[1]
    let segundoMaior = vetor[2]

    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] > maiorNum) {
            maiorNum = vetor[i]
        }
    }

    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] < maiorNum && vetor[i]>= segundoMaior) {
            segundoMaior = vetor[i]
        }
    }

    console.log(segundoMaior)
}

segundoMaiorNum([10, 5, 35, 65])
segundoMaiorNum([12, 16, 1, 5])
segundoMaiorNum([8, 4, 5, 6])
