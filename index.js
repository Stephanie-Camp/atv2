const readline = require('readline');
let rl = readline.createInterface(process.stdin);
const random = Math.floor(Math.random()*10)+1;

console.log("Seja bem vindo(a)!\nTente a sorte, e digite um numero entre 1 e 10: ");

rl.question("", (data)=>{
  var num = Number(data);  
  do{
    if(num === random){
      console.log("Parabens! Voce acertou o numero secreto.");
    }else if(num > random && num < 11){
      console.log("Tente um numero menor.");
    }else if(num < random && num > 0){
      console.log("Tente um numero maior.");
    }else{
      console.log("Valor invalido. Digite um numero valido!");
    } 
    return num;
  }while(num != random);
  
})
