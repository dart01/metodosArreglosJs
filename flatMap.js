// El método flatMap es inmutable y consiste en la combinación de los métodos
//  map y flat. Primero realiza la iteración de los elementos del array
//   (como si fuera map), y después los aplana en una sola profundidad 
//   (como si fuera flat).

const strings = ["Nunca pares", "de Aprender"]

strings.map(string => string.split(" ")) 
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]

strings.flatMap(string => string.split(" ")) 
// [ 'Nunca', 'pares', 'de', 'Aprender' ]