//ler um numero qualquer e exibi-los no console separadamente: 
const input = require("synchro-prompt");
var num = Number(input("Digite um numero de 4 digitos por favor: "));
var cont = String(num);

for(var i = 0; i < cont.length; i++){
  var x = num/(10000/(110**i));
  num = num%(1000/(10**i));
  console.log(`Posicao ${i+1}: `, (x));
} 
