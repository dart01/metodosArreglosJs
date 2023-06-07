// or ejemplo, hagamos un algoritmo que devuelva el primer elemento que 
// sea mayor a 40 de un array.

// Si utilizamos la estructura for, necesitaremos una variable con
//  el valor undefined e iterar hasta que se cumpla la condición. 
//  La palabra reservada break rompe el ciclo repetitivo.
const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        break
    }
}

console.log(respuesta) // 41

// Si se necesita el índice, en lugar de una variable con el valor de undefined,
//  debería estar un valor de -1. Y también cambiar el valor del elemento por el del índice del for.

// Con los métodos find y findIndex, solo debemos establecer la función que
//  indique la condición a cumplir para cada elemento.


const respuesta3 = numbers.find(item => item >= 40)
const respuesta2 = numbers.findIndex(item => item >= 40)

console.log(respuesta3) // 41
console.log(respuesta2) // 2