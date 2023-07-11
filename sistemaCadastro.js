const input = require('synchro-prompt')
var qntd = 0;
do{
var op = Number(input(`Ola! O que voce deseja fazer? \n1 - Cadastrar nova pessoa \n2 - Ver quantidade de pessoas cadastradas \n3 - Sair do programa \nDigite uma opcao: `));

  switch (op) {
    case 1:
      console.log("Nova pessoa cadastrada!")
      qntd = qntd + op++;
      break;
    case 2:
      //sistema de cadastro do governo: foi possivel realizar o cadastro de uma pessoa apenas antes de cair.
      console.log("Quantidade de pessoas cadastradas: ", qntd);
      break;
    case 3:
      console.log("Saindo do programa. . . . . . . . . . . . . . . . . . . . .");
      break;
    default:
      console.log("Opcao invalida!")
  }

}while(op != 3)
