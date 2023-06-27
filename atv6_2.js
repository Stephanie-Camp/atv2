//ler um numero de 4 digitos e exibi-los no console separadamente: 
const readline = require('readline');
const rl = readline.createInterface(process.stdin);

  var num = parseInt(5555);

  if(num > 999 && num <10000){
    for(var i = 0; i < 4; i++){
      var x = num / (10000/(10**i));
      num = num%(1000/(10**i));
      console.log(`Posicao ${i}: `, x);
    }
  }else{ 
    console.log("O numero digitado nao tem 4 digitos!");
  }
