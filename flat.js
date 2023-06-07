// El método flat es inmutable que consiste en retornar un array donde 
// los sub-arrays han sido aplanados hasta una profundidad especificada. 
// El aplanamiento consiste en transformar un array de arrays a una sola 
// dimensión.
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]
  
  const flatArray = []
  
  for(let i=0; i<matrix.length; i++){
    const array = matrix[i]
    for(let j=0; j<array.length; j++){
      flatArray.push(matrix[i][j])
    }
  }
  
  console.log(flatArray)
  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//   Con el método flat solamente es necesario indicar la
//    profundidad de aplanamiento del array.

const array = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
console.log(result3)// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
console.log(result4)// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]