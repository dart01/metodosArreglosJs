const letters = ['a', 'b', 'c']

//ytilizando un ciclo for normal 

for(let index=0; index<letters.length; index++){
    const element = letters[index]
    console.log('for', element)

}

//Cómo identificamos objetos con Duck Typing en JavaScript
letters.forEach(valor => console.log('foreach', valor))


const products = [
    {title: 'burguer', price:'2.50'},
    {title: 'pizza', price:'2.1'},
    {title: 'soda', price:'3'},
    {title: 'lemonade', price:'5.2'},
]
products.forEach(product => {
console.log(product)

})