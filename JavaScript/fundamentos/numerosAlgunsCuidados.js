console.log(7/0) //por motivos obvios, infinito
console.log("10"/2) //mesmo entendendo ser string estranhamente funciona
console.log("10,2"/2) //ele entende que é uma string, por isso nao da certo
console.log("Show!" * 2)
console.log(0.1+0.7) //nao da certo pela tipificação dos pontos flutuantes
//console.log(10.toString()) //dentro de parenteses é possivel chamar a função:
console.log((10.345).toFixed(2))