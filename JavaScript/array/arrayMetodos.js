const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() //massa quebrou o carro kk POP remove o ultimo elemento
console.log(pilotos)

//push adiciona novos elementos
pilotos.push('verstappen')
console.log(pilotos)

//shift remove elementos da primeira posição
pilotos.shift()
console.log(pilotos)

//unshift adiciona um elemento na primeira pisição
pilotos.unshift('hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos
//adicionar
pilotos.splice(2, 0, 'bottas', 'massa')
//vai adicionar no indice 2, nao vai remover ninguem e os nomes de quem adicionou
console.log(pilotos)

//remover
pilotos.splice(3, 1) //massa quebrou de novo =(
//indice que vai remover e removeu so um elemento
console.log(pilotos)

//slice retorna um novo array a partir do indice
const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //pegando a partir do indice 1 e vai ate o 4 mas sem incluir o elemento 4
console.log(algunsPilotos2)