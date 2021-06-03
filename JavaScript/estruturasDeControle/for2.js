const notas = [6.7, 7.4, 9.9, 8.1, 7.7]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Laura',
    idade: 19,
    peso: 68
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}