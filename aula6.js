var num = 1;

console.log(`Valor original: ${num}`);
num++; //pos incremento
console.log(`Valor apos o incremento ${num}`);
++num; //pre incremento
console.log(`Valor apos um novo incremento ${num}`);
num--;//quando vem depois da variavel, ele excuta depois
console.log(`Valor apos o decremento ${num}`);
--num;//quando vem antes, ele executa na hora de mostra o valor da variavel
console.log(`Valor apos o novo decremento ${num}`);

var num2 = 5;
num2++; //primeiro a variavel e depois a soma
console.log(`Valor apos o incremento ${num2}`);
++num2; //primeiro a soma e entao a variavel
console.log(`Valor apos o incremento ${num2}`);

var contador = 0;
while(contador < 10){
  //executa ate a condicao ser falsa, no caso - contador ser MAIOR que 10
  console.log("Heloo - ", contador); //=>loop infinito
  contador++;
} //para quando nao se tem valores limites para o loop, "tentativas infinitas"

console.log();//pula uma linha no console

var condition = 10;
for(var variavelDeControle = 0; variavelDeControle < condition; variavelDeControle++){
  console.log(`variavelDeControle - ${variavelDeControle}`); //variavel de controle mostrara os numeros do 0 ate o 9
  console.log(`conditios ${condition} - ${variavelDeControle}`); //condiiton mostra o valor dez, 10 vezes
}//para quando se tem valores limites, "um vetor de 20 posicoes"

console.log();

var cont = 0;
do{
  console.log(`Teste - ${cont}`);//primeiro roda o codigo/executa a tarefa e depois confere a condicao, vai rodar pelo menos uma vez antes de conferir a condicao
}while(cont != 0);

while(true){ //while com loop infinito, nao quebra por nada
  console.log(`Hello`);
  break; //quebra o loop do while
}

var b = 0;
while(true){
  console.log(`Valor: ${b}`)
  b++;
  if(b == 10){
    break;
  }
}

var a = 0;
while(true){
  console.log(`Valor: ${a}`)
  a++;
  if(a == 10){
    continue;
  }else if(a == 11){
    break;
  }
  console.log("OK.");
}