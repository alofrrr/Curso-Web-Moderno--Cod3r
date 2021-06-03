/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/


function caixaEletronico(valor) {
    notas100 = Math.floor(valor / 100)
        resto100 = valor % 100
    notas50 = Math.floor(resto100 / 50)
        resto50 = resto100 % 50
    notas10 = Math.floor(resto50 / 10)
        resto10 = resto50 % 10
    notas5 = Math.floor(resto10 / 5)
        resto5 = resto10 % 5
    notas1 = Math.floor(resto5 / 1)
        resto1 = resto5 % 1

    if (notas100 >= 1) {
        console.log(`${notas100} nota(s) de R$100`)
    }
    if (notas50 >= 1) {
        console.log(`${notas50} nota(s) de R$50`)
    }
    if (notas10 >= 1) {
        console.log(`${notas10} nota(s) de R$10`)
    }
    if (notas5 >= 1) {
        console.log(`${notas5} nota(s) de R$5`)
    }
    if (notas1 >= 1) {
        console.log(`${notas1} nota(s) de R$1`)
    }
}

caixaEletronico(78)
