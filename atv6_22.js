//ler um numero qualquer e exibi-los no console separadamente: 
const input = require("synchro-prompt");
var num = (input("Digite um numero, por favor: "));

for(var i = 0; i < num.lenght; i++){
  num = Number(num)
  var x = num / (1000/(10**i));
  num = num%(1000/(10**i));
  console.log(`Posicao ${i+1}: `, parseInt(x));
  }
