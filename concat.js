// El método concat es inmutable y consiste en crear un nuevo array a 
// partir de la unión de otros valores o arrays 
// especificados como argumentos.

// Si deseas utilizar una estructura for para concatenar arrays, debes 
// copiar el primer array sin su referencia en memoria para que no exista 
// mutabilidad. Puedes realizar una copia con el spread operator 
// (operador de propagación) o con el nuevo método structuredClone.
//  También puedes utilizar el método push si no importa la mutabilidad 
//  del array original.
// Con el método concat, solo debemos establecer el/los elemento/s a concatenar
//  a un array de manera inmutable, es decir, los elementos originales no
//   cambiarán.
const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const result1 = numbers1.concat("hola", "mundo")
const result2 = numbers1.concat(numbers2)
const result3 = numbers1.concat(numbers2, "hola")
const result4 = numbers1.concat(numbers2, numbers3)

console.log(result1) // [ 1, 2, 3, 4, 'hola', 'mundo' ]
console.log(result2)// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(result3) // [ 1, 2, 3, 4, 5, 6, 7, 8, 'hola' ]
console.log(result4) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]