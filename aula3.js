var isRanning = true
var isSunny = false
console.log("isRanning: ", isRanning, "\nisSunny: ", isSunny) 

console.log("3 > 5: ", 3 > 5) //O mais adequado e o operador comparativo '>', vai conferir se 3 e maior que 5 de forma rapida

console.log("10 > 5 && 7 < 3: ", 10 > 5 && 7 < 3)

var x = -4
if(x > 0){
  console.log("O numero e positivo!")
}else if(x < 0){
  console.log("O numero e negativo!")
}else{
  console.log("O numero e zero!")
}

var z = 23
var y = z%2
if(y === 0){
  console.log("O numero e par!")
}else{
  console.log("O numero e impar!")
}

var nota = 9
if(nota >= 6){
  console.log("APROVADO")
}else{
  console.log("REPROVADO")
}

var nome = "Laura"
var senha = 0102
if(nome == senha || senha === 1234){
  console.log("Nome e senha invalidos! \nTente novamente.")
}else{
  console.log("Nome e senha validos!")
}
