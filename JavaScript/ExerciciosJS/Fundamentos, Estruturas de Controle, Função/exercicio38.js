/* Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

function entre(a, b) {
    let maiorValor, menorValor
    if (a > b) {
        maiorValor = a
        menorValor = b

    } else if (b > a) {
        maiorValor = b
        menorValor = a
    }
    for (i = menorValor; i <= maiorValor; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}


entre(1, 10)
entre(10, 1)