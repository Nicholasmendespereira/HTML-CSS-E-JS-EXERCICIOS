/*const notas = [9.9, 9.5, 8.2, 7.5, 1.6, 3.5, 4.3, 5.2]

// sem callback

let notasbaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas.push(notas[i])
    }
}
console.log(notasbaixas) */


//usando callback
const notas = [9.6, 2.5 , 6.6 , 54.6 , 45 , 54151, 65 ,]

let notasbaixas = []

for (let i in notas) {
    if (notas[i] > 7) {
        notasbaixas.push(notas[i])
    }
}
console.log(notasbaixas)