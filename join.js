const elements = ["hola", null, "como", "estas"]

let acumulator = ""
const separator = "/"
for (let i = 0; i<elements.length; i++){
  const element = elements[i] ?? ""
  if(i !== elements.length-1){
    acumulator += element + separator
  }else{
    acumulator += element
  }
}

console.log(acumulator) 
const elements2 = ["hola", null, "como", "estas"]

const resultado = elements2.join("/")

console.log(resultado) // 'hola//como/estas'