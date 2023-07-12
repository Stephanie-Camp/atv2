const input = require("synchro-prompt");
var vet = [];
var soma = 0;

for (var i = 0; i < 10; i++) {
  vet.push(Number(input("INSIRA AQUI A NOTA DO ESTUDANTE: ")));
  soma = soma + vet[i];
}
console.log(`\nVetor:`, vet, `\nSoma total das notas: ${soma.toFixed(1)} \nMedia da sala: ${(soma / 10).toFixed(2)}`);

//problema
var num = 0
for (var i = 0; i < 10; i++) {
  if (vet[i] > num) {
    num = vet[i];
  }
}
console.log(`\nMaior nota da turma: ${num}`);

for (var i = 0; i < 10; i++) {
  if (vet[i] < num) {
    num = vet[i];
  }
}
console.log(`Menor nota da turma: ${num}`);
