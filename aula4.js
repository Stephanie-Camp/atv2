//importacao do modulo para realizar a entrada de daods
const readline = require('readline');//const readline - readline pode ser qualquer nome
let rl = readline.createInterface(process.stdin);

console.log("Digite dois numeros ");

//funcao que vai receber a variavel
rl.question("", (data)=>{//recebe sempre dois parametros("", (data))
  var num = Number(data); //number e necessario para realizar a conversao das variaveis
rl.question("", (data)=>{
  var num2 = Number(data);
  console.log("SOMA: ", num + num2); //Number(num)+Number(num2) funciona
})
})