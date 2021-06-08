/*Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.*/

/*/[aeiouà-ú]/gi

Flags:
g -> global. Busca por todas as ocorrências.
i -> case insensitive. Não faz distinção entre maiúsculas e minúsculas.*/

function removeVogais(palavra){
    return palavra.replace(/[aeiouà-ú]/gi,'');
}

console.log(removeVogais("ana laura"))
console.log(removeVogais("Paralelepípedo"))
