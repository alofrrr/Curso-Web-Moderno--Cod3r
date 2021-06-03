const a = 1
const b = 2
const c = 3

//antigamente
const obj1 = { a: a, b: b, c: c }
//atual
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4)

const obj5 = {
    //antigamente
    funcao1: function () {
        //...
    },
    //atual
    funcao2() {
        //....
    }
}