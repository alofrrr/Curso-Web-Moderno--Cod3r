/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

function um(v1, v2) {
    let resultados = []
    for (i = 0; i < v1.length; i++) {
        resultados[i] = v1[i] * v2
    }
    console.log(resultados)
}
function dois(v1, v2) {
    let resultados = []
    if (v2 > 5) {
        for (i = 0; i < v1.length; i++) {
            resultados[i] = v1[i] * v2
        }
        console.log(resultados)
    } else {
        console.log('O elemento é menor que 5')
    }
}
vetor1 = [1, 2, 3, 4]
um(vetor1, 2)
dois(vetor1, 6)
dois(vetor1, 4)