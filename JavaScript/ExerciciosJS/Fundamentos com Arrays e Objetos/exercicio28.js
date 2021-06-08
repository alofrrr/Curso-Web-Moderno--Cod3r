/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.*/


function quantidadeDigitos(numeros, quantidadeDesejada) {
    let resultado = []

    for (numero of numeros) {
        const quantidadeDeDigitos = String(numero).length

        if (quantidadeDeDigitos === quantidadeDesejada)
            resultado.push(numero)
    }
    console.log(resultado)
}

quantidadeDigitos([38, 2, 365, 10, 125, 11], 2)