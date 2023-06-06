// Si empleamos la estructura for, necesitaremos un array
//  adicional vacío y usarlo con el método push para agregar 
//  los elementos que cumplan la condición. El método push
//   es mutable. 

const words = ["spry", "elites", "limit", "apple", "exuberant"]
//const newWords=[]

// for(let i=0; i< words.length; i++){
//     const word = words[i]
     
//     if(word.length >= 6){
//         newWords.push(word)
//     }
// }
// console.log(newWords) // [ 'elites', 'exuberant' ]

//Con el método filter, solo debemos establecer la función 
//que indique la condición a cumplir para cada elemento

const newWords= words.filter( function (word){
    if(word.length >= 6){
        return true
    }else{
        return false
    }
  })

  console.log(newWords)

  //o la menr abreviada del metodo filter

  const newWords2 = words.filter(word => word.length >= 6 )

  console.log(newWords2)