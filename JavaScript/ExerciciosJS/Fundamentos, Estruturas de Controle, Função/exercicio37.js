/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function aritmética(n, a1, r) {
    let pa, somaPA

    pa = a1 + ((n - 1) * r)

    console.log(pa)

    somaPA = ((a1 + pa) / 2) * n

    console.log(somaPA)

}

function geométrica(n, a1, r) {
    let pg, somaPG

    pg = a1 * (r ** (n - 1))

    console.log(pg)

    somaPG = (a1 * ((r ** n) - 1)) / (r - 1)

    console.log(somaPG)

}


aritmética(10, 2, 2)
geométrica(10, 2, 2)