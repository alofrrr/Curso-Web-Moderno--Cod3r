/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.*/


function sorteio(num){
    const numAleatorio = Math.floor(Math.random() * (11 - 1)) + 1;

    if(numAleatorio == num){
        console.log(`Parabéns! O número sorteado foi o ${numAleatorio}`)
    }else{
        console.log(`Que pena! O número sorteado foi o ${numAleatorio}`)
    }
}

sorteio(3)
sorteio(6)
sorteio(7)
sorteio(1)
sorteio(4)


