/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

function separaNumero() {
    const vetor = []
    numerosSeparados = []
    for (i in arguments) {
        vetor[i] = arguments[i]
    }

    for (i = 0; i < vetor.length; i++) {
        if (typeof vetor[i] == "number") {
            numerosSeparados.push(vetor[i])
        }
    }


    console.log(numerosSeparados)

}
separaNumero("Javascript", 1, "3", "Web", 20)
