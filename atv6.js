//atv1
var cont = 1;
var x = 0;
while(cont <= 40){
  x++;
  if(x%2 === 0){
    console.log(`Valor: ${x}`);
  }
  cont++;
}

console.log();

//atv2
var soma = 0;
for(var i = 1; i <= 10; i++){
  soma = soma + i;
  //console.log("Soma: ", soma); -> exibe a soma a cada loop
}
console.log(`Soma = ${soma}`);