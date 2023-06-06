// El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos 
//un elemento que cumpla la condición establecida en la función (callback).


// La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio)

// Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, 
// con un resultado igual o parecido.

// Por ejemplo, hagamos un algoritmo que indique si en un array existe al menos un número par.

// Si utilizamos la estructura for, necesitaremos una variable de tipo booleana con el valor false e iterar hasta que la condición se cumpla.
//  La palabra reservada break rompe el ciclo repetitivo.


const num = [2, 0, 1, 3, 5];

let respuesta = false;

for( i=0; i< num.length; i++){
    const element = num[i];
    if(element % 2 == 0){
        respuesta = true; 
        break
    }
}
console.log(respuesta);


//Con el método some solo debemos establecer la función que indique la condición a cumplir para cada elemento.

const number =[1, 2, 3, 4, 5];

const respuesta2 = number.some(item => item % 2 ==0);

console.log(respuesta2);