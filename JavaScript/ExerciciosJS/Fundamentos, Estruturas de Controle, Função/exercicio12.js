/*Faça um algoritmo que calcule o fatorial de um número.*/

function fatorial(fat){
    var resultado = fat
    for(let i = 1; i < fat; i++){
        resultado *= i
    }
    console.log(resultado)
}

fatorial(10)