/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/

function contaPalavras(palavra){
    let palavras = 1
    for(i=0; i<=palavra.length; i++){
        if(palavra.charAt(i)== " "){
            palavras++
        }
    }
    console.log(palavras)
}

contaPalavras("ana laura")
contaPalavras("Me divirto aprendendo a programar")