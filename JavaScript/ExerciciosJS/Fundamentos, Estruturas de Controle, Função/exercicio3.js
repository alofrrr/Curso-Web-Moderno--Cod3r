/*Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente*/

function elevado( base, expoente, total) {
    total = base ** expoente
    console.log(`${base} elevado a ${expoente} = ${total}`)
}

elevado(3, 4)
elevado(5, 6)
elevado(6, 7)