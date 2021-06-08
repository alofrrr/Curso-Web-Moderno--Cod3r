/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. */

function objParray(objeto){
    const array = Object.entries(objeto)
    console.log(array)
}

objParray({codigo: 11111,
    preco: 12000
    })