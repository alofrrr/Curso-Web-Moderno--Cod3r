/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function vet() {
    const vetor = []
    let maiorValor=0, menorValor=0

    for (i in arguments) {
        vetor[i] = arguments[i]
    }
    n = vetor.length

    for(i=0; i<n; i++){
        if(vetor[i]<menorValor){
            menorValor = vetor[i]
        }else if(vetor[i]>maiorValor){
            maiorValor = vetor[i]
        }
    }
    console.log(menorValor, maiorValor)
}

vet(1, 2, 4, 50, 12, 5, 0, 2, 6, -3)
