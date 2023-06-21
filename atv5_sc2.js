const readline = require('readline');
const rl = readline.createInterface(process.stdin);

console.log("Bem vindo!\nDigite dois numeros, por favor:")

rl.question("", (data)=>{
  var num1 = Number(data);
  
  rl.question("", (data)=>{ 
    var num2 = Number(data);
    let ex = Math.pow(num1, num2);
    console.log("Operacoes que podem ser realizadas:\na - Soma \nb - Subtracao\nc - Multiplicacao \nd - Divisao \ne - Exponenciacao \nf- Resto da divisao \nDigite uma opcao, por favor:");
    
    rl.question("", (data)=>{
      var op = data;
      
      switch(op){
        case "a":
          console.log("Resultado da soma: ", (num1+num2));
          break;
        case "b":
          console.log("Resultado da divisao: ", (num1-num2));
          break;
        case "c":
          console.log("Resultado da multiplicacao: ", (num1*num2));
          break;
        case "d":
          console.log("Resultado da divisao: ", (num1/num2));
          break;
        case "e":
          console.log("Resultado da exponenciacao: ", (ex));
          break;
        case "f":
          console.log("Resto da divisao entre o primeiro e o segundo numero: ", (num1%num2));
          break;
        default: 
          console.log("Opcao invalida! Tente novamente.");
      }

    })   
  })
})