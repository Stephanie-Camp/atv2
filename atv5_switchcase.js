const readline = require('readline');
let rl = readline.createInterface(process.stdin);

console.log("Seja bem vindo(a)!\nEscolha uma opcao de nosso cardapio: ");

rl.question("", (data)=>{
  var num = Number(data); 
  switch (num){
    case 1:
      console.log("Voce escolheu: Lasanha.");
      break;
     case 2:
      console.log("Voce escolheu: Salmao grelhado.");
      break;
    case 3:
      console.log("Voce escolheu: Risoto de cogumelos.");
      break; 
    case 4:
      console.log("Voce escolheu: Bife a parmegiana.");
      break;
    default:
      console.log("Opcao invalida! \nPor favor, escolha uma opcao valida.");
      break;
  }
})