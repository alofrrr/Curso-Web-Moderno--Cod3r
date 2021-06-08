/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.*/

function areaTriangulo(base, altura) {
    let area = 0
    area = (base * altura) / 2
    console.log(area.toFixed(2))
}

areaTriangulo(10, 15)
areaTriangulo(7, 9)
areaTriangulo(9.25, 13.1)