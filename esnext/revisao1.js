// let e const
{
    var a = 2
    let b = 3
}
console.log(a)
//console.log(b) 
//a variavel b n esta definida fora do bloco no cas pois let tem escopo de bloco e var n, podendo ser acessada dentro e fora 

// template string
const produto = 'iPad'
console.log(`${produto} é caro!`)

//destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 19 }
console.log(nome, idade)