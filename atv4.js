const readline = require("readline");
const rl = readline.createInterface(process.stdin);
const valor = Math.floor(Math.random()*10)+1;

console.log("Seja bem vindo(a)!\nTente a sorte, e digite um numero: ")

rl.question("", (data)=>{
  var num = Number(data);
if(num === valor){
  console.log("Parabens! Voce acertou o numero secreto.");
}else if(num > valor && num < 11){
  console.log("Tente um numero menor.");
}else if(num < valor && num > 0){
  console.log("Tente um numero maior.");
}else{
  console.log("Valor invalido. Digite um numero valido");
}
  
})