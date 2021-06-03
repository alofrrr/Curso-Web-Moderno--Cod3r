const valores = [7.7, 8.9, 9.1, 5.4]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

//caso pulassem indices, a linguagem mostra

valores[6] = 1434
console.log(valores)

//mostra quantos valores tem no array

console.log(valores.length)

//para adicionar mais valores no array

valores.push({id: 3}, 'teste', null, false)
console.log(valores)

//para 'ejetar' valores no array
console.log(valores.pop())

//para deletar valores

delete valores[0]

console.log(valores)

console.log(typeof valores)