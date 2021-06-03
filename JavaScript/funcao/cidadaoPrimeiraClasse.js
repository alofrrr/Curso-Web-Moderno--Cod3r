//função em JS é First-Class Object
//Higher-order function

// criar de forma literal
function fun1(){

}

//armazenar em uma variavel
const fun2 = function() {

}

//armazenar em um array
const array = [function(a, b){ return a+b }, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de um objeto
const obj = {}
obj.falar = function(){ return 'Obj'}
console.log(obj.falar())

//passar função como parametro
function run(fun){
    fun()
}

run(function() { console.log('Executando...')})

//uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

//pode invocar assim
soma(2, 3)(4)
//e assim
const cincoMais = soma(2,3)
cincoMais(2)