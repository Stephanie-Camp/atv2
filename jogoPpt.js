const readline = require('readline');
const rl = readline.createInterface(process.stdin);
const random = Math.floor(Math.random()*3)+1;

console.log("Seja bem vindo(a)! Vamos jogar? \nDigite uma opcao: \n1 - PEDRA \n2 - PAPEL \n3 - TESOURA");

rl.question("", (data)=>{
  var op = Number(data);
  if (op === random){
    console.log("EMPATE");
  }else if (op < random){
    console.log("O computador jogou " + random + "\nVoce perdeu!");
  }else if(op > random ){
    console.log("O computador jogou " + random + "\nVoce ganhou!");
  }else{
    console.log("Opcao invalida. \nDesculpe, tente de novamente! :)");
  }

})
