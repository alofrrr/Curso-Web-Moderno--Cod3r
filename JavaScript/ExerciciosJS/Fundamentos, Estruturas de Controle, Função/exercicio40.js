/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */

function conceito() {
    const conceitos = []
    for (i in arguments) {
        conceitos[i] = arguments[i]
    }
    n = conceitos.length

    for (i = 0; i <= n; i++) {
        if (conceitos[i]>=0 && conceitos[i]<=4.9){
            console.log(`Conceito D a nota ${conceitos[i]}`)
        }
        if (conceitos[i]>=5 && conceitos[i]<=6.9){
            console.log(`Conceito C a nota ${conceitos[i]}`)
        }
        if (conceitos[i]>=7 && conceitos[i]<=8.9){
            console.log(`Conceito B a nota ${conceitos[i]}`)
        }
        if (conceitos[i]>=9 && conceitos[i]<=10){
            console.log(`Conceito A a nota ${conceitos[i]}`)
        }
}
}
conceito(4.4, 6.6, 8.8, 9.9, 7.3, 1.1, 5)
