console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('escola cod3r'.reverse())

Array.prototype.fisrt = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].fisrt())
console.log(['a', 'b', 'c', 'd'].fisrt())


//nao substituir comportamentos:
String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Escola cod3r'.reverse())
