/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function vetor(a, b) {
   console.log(a,b)
    for(let i = 0; i < a.length; i++){
        a[i] = a[i] + b[i]
        b[i] = a[i] - b[i]
        a[i] = a[i] - b[i]
    }
    console.log(a,b)
}

let vetor1 = [1, 2, 3, 4]
let vetor2 = [6, 7, 8, 9]
vetor(vetor1, vetor2)