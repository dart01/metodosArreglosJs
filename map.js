const numbers = [1,2,3,4]
 const newNumbers = []

 for (let i=0; i< numbers.length; i++){
    const number=numbers[i]*2
    
   newNumbers.push(number*2)
 }
 console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]


 const numbers2 = [2,4,6,8]
 const newNumbers2 = numbers2.map(number => number *2)

 console.log(newNumbers2) // [ 2, 4, 6, 8, 10 ]

//  Diferencia entre forEach y map
// La principal diferencia entre estos dos es que forEach solamente 
// itera cada elemento, mientras que map itera y transforma cada elemento
//  en un nuevo array.

// ¿Pero también se pueden transformar los elementos con forEach? 
// Sí, sin embargo, necesitas agregar cada elemento en cada iteración a 
// un array nuevo, caso contrario puedes mutar el array original.