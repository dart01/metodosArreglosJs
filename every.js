// El método everyes inmutable y consiste retornar un valor lógico verdadero 
// si todos los elementos cumplen con la condición establecida en la función (callback).

// Este método recibe dos argumentos:

// La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con 
// la condición especificada (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, 
// será undefined. Recuerde que this en arrow functions es el objeto global.

const numbers = [1, 30, 42, 29, 10 ,13]

let respuesta = true
for(let i=0; i <Number.length; i++){
    const element = numbers[i]
    if(element >= 40){
        respuesta = false
        break
    }
}
console.log(respuesta);

const respuesta2 = numbers.every(item => item <=40)
console.log("rta", respuesta2)