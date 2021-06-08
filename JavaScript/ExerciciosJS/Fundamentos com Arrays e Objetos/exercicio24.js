/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/


function contaCaractere(frase, caractere){
    let Qcaractere = 0
    for(i=0; i<=frase.length; i++){
        if(frase.charAt(i)== caractere){
            Qcaractere++
        }
    }
    console.log(Qcaractere)
}

contaCaractere("ana laura", "a")
contaCaractere("Me divirto aprendendo a programar", "e")