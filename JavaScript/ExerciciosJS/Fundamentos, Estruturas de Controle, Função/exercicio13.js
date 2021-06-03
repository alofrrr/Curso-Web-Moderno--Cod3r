/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function diadasemana(dia) {
    switch (dia) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia Útil')
            break
        case 1:
        case 7:
            console.log('Fim de Semana')
            break
        default:
            console.log('Esse dia existe na semana?')

    }
}

diadasemana(1)
diadasemana(2)
diadasemana(3)
diadasemana(4)
diadasemana(5)
diadasemana(6)
diadasemana(7)
diadasemana(8)
