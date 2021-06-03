/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function anoes(crianca1, crescimento1, crianca2, crescimento2) {
    if (crianca1 > crianca2) {
        console.log('A menor criança é a número 2')
        if (crescimento1 > crescimento2) {
            console.log('A criança número 2 continuará sendo a menor')
        } else if (crescimento2 > crescimento1) {
            for (i = 0; i <= 30; i++) {
                crianca2 = crianca2 + (crescimento2 * i)
                crianca1 = crianca1 + (crescimento1 * i)
                if (crianca2 > crianca1) {
                    console.log(`A criança número 2 ultrapasará a criança número 1 em ${i} anos`)
                    break;
                }
            }
        }
    } else {
        console.log('A menor criança é a número 1')
        if (crescimento2 > crescimento1) {
            console.log('A criança número 1 continuará sendo a meno')
        } else if (crescimento1 > crescimento2) {
            for (i = 0; i <= 30; i++) {
                crianca2 = crianca2 + (crescimento2 * i)
                crianca1 = crianca1 + (crescimento1 * i)
                if (crianca1 > crianca2) {
                    console.log(`A criança número 1 ultrapasará a criança número 2 em ${i} anos`)
                    break;
                }
            }
        }
    }
}

anoes(76, 5, 70, 7)
anoes(70, 7, 76, 5)
