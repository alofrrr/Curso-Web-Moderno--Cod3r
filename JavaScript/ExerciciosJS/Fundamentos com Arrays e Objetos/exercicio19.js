/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.*/


function mediaArray(vetor) {
    let soma = 0
    let media = 0

    for (i = 0; i<vetor.length; i++) {
        soma += vetor[i]
    }
    media = soma / vetor.length
    console.log(media)
}

mediaArray([5, 4, 3, 2, 1])
