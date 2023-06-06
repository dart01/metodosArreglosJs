// El método reduce es inmutable y consiste retornar un solo valor del array iterado a partir de una función (callback) 
// que indica de qué manera se itera cada elemento para reducirlo.

// Este método recibe dos argumentos:

// La función que itera y reduce cada elemento del array. (obligatorio)
// El valor inicial que utilizará como argumento la función. 
// Si no se especifica, en la primera iteración el valor inicial 
// será el primer elemento del array y no ejecuta la función.

const numbers = [5,4,8,6,2]

const reducedValue = numbers.reduce((suma, number) => (suma + number**2),0)//0 <- Valor inicial

console.log(reducedValue) // 125