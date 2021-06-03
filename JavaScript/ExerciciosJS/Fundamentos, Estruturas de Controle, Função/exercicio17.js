/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function aumento(plano, salario) {
    switch (plano) {
        case 'a':
            console.log(`De acordo com o plano A seu salário passará a ser: ${(salario / 100) * 10 + salario}`)
            break
        case 'b':
            console.log(`De acordo com o plano B seu salário passará a ser: ${(salario / 100) * 15 + salario}`)
            break
        case 'c':
            console.log(`De acordo com o plano C seu salário passará a ser: ${(salario / 100) * 20 + salario}`)
            break
        default:
            console.log('O plano escolhido é inválido!')

    }
}

aumento('a', 1000)
aumento('b', 1000)
aumento('c', 1000)
aumento('d', 1000)