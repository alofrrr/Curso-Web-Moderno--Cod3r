/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculadora(num1, operacao, num2) {
    switch (operacao) {
        case '+':
            console.log(`O resultado da soma é ${num1 + num2}`)
            break
        case '-':
            console.log(`O resultado da subtração é ${num1 - num2}`)
            break
        case '*':
            console.log(`O resultado da multiplicação é ${num1 * num2}`)
            break
        case '/':
            console.log(`O resultado da divisão é ${num1 / num2}`)
            break
        default:
            console.log('Essa operação é inválida!')
    }
}

calculadora(1, '+', 2)
calculadora(1, '*', 2)
calculadora(1, '-', 2)
calculadora(1, '/', 2)
calculadora(1, '%', 2)