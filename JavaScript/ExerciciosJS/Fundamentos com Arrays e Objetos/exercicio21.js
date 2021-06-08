/*Criar uma função que receba um array de números e retorne o menor número desse array. */

function menorNum(vetor){
    let menorNum = vetor[1]

    for(i=0; i<vetor.length; i++){
        if(vetor[i]<menorNum){
            menorNum = vetor[i]
        }
    }
    console.log(menorNum)
}

menorNum([10, 5, 35, 65])