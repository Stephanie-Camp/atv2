//numeros primos
const input = require("synchro-prompt");
var x = Number(input("Digite um numero, por favor: "));
var i = 2;
 
while(true){
 
  if((i > 2 && i != x) && x === 1){
    if(x%i === 0){
      console.log(`${x} nao e um numero primo!`);
      break;
    }
  }else{
    console.log(`${x} e um numero primo!`);
    break;
  }
  ++i;
} 
