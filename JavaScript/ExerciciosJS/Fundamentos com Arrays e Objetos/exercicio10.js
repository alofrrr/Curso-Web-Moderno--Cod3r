/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function mais(num){
    let Mais = ''

    for(i=0; i<num; i++){
         Mais += '+'
    }
    return Mais
}

console.log(mais(6))