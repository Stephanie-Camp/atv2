const readline = require("readline");
const rl = readline.createInterface(process.stdin);

console.log("Ola! O que voce deseja fazer? \n1 - Cadastrar nova pessoa \n2 - Ver quantidade de pessoas cadastradas \n3 - Sair do programa");

rl.question("", (data) => {
  var op = Number(data);

  switch (op) {
    case 1:
      console.log("Nova pessoa cadastrada!")
      break;
    case 2:
      var qntd = op - 1;
      //sistema de cadastro do governo: foi possivel realizar o cadastro de uma pessoa apenas antes de cair.
      console.log("Quantidade de pessoas cadastradas: ", qntd);
      break;
    case 3:
      console.log("Saindo do programa. . . . . . . . . . . . . . . . . . . . .");
      break;
    default:
      console.log("Opcao invalida!")
  }

})