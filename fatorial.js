const input = require("synchro-prompt");
var x = Number(input("Insira um valor para realizarmos o fatorial dele: "));
var i = x;

if(x === 0 || x === 1){
  console.log(`${x}! = 1`);
}else if(x > 1){
  while(i != 1){
    var fat  = x * (i - 1);
    x = fat;
    i--;
  }
  console.log(`Resultado = ${fat}`); 
}else{
  console.log("Numero invalido.");
}
