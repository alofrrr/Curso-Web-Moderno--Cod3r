/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)*/

function identificaTriangulo(x, y, z) {
    if (x == y && y == z) {
        console.log('O triângulo é Equilátero')
    } else if (x == y || x == z) {
            console.log('O triângulo é Isósceles')
    } else if (y == x || y == z) {
        console.log('O triângulo é Isósceles')
    } else {
        console.log('O triângulo é Escaleno')
    }
}

identificaTriangulo(2, 2, 2)//equilatero
identificaTriangulo(3, 2, 3)//isosceles
identificaTriangulo(2, 2, 3)//isosceles
identificaTriangulo(2, 3, 3)//isosceles
identificaTriangulo(1, 2, 3)//escaleno