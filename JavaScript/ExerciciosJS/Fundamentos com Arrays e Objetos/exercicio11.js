/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array: */

function retornaPeU(vet) {

    const ultimoElemento = vet.length - 1
    NovoVetor = [vet[0], vet[ultimoElemento]]

    return NovoVetor
}


console.log(retornaPeU([1, 2, 3, 4]))
console.log(retornaPeU([1, 2, 3, 4, 5, 6, 8, 7]))