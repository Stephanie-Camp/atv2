var a = true; //variavel booleana, "true" diferente de true
var b = false;

console.log(typeof(a));
console.log("!a: ", !a); //! inverte o valor, verifica condicao inversa (se false, ele retorna true)

var x = 1;
var y = 2;
var w = 3;
var z = 1;

console.log("x || y: ", x || y); //retorna true se caso *um* dos valores for verdadeiro (nao importa os outros)
console.log("x == z || w == x: ", x == z || w == x); //retorna true pois uma ds expressoes e verdadeira
console.log("x == z && z == y: ", x == z && z == y); //retorna false pois uma das expressoes e falsa
console.log("\nAplicacao do not(!): \ny == x && w == y: ", y == x && w == y);
console.log ("!(y == x && w == y): ", !(y == x && w == y));
console.log("!(y == x) && w == y: ", !(y == x) && w == y);
//and(&&) apenas retorna true se todos foram true
//or(||) retorna false apenas caso todos sejam false
//not(!) inverte o valor booleano: true + true = false; false + false = true

console.log("x == y: ", x == y); //igualdade > confere se os valores sao iguais, ex. 1 = "1" - true
console.log("x === y: ", x === y); //igualdade estrita > confere mais precisamente os valores sao iguais 1 === "1" - false
console.log("x != z: ", x != y); //diferente > confere se os valores sao diferentes

//condicionais,if()-else
if(x == w){
  console.log("E verdadeiro: ", x);
    //como x != w, ele nao vai imprimir x
}else{
  console.log("E falso: ", w); //como x nao e igual a w, o console vai imprimir w
}

console.log("x >= 10? ", x >= 10);
console.log("w <= 5? ", w <= 5);

if(x && z > 1){
  console.log("x && z > 5") //condicao falsa, nao teremos retorno, proxima condicao
}if(x && z == 1){
  console.log("x && z = 1") //condicao verdadeira, teremos retorno
}if(z == 1){
  console.log("z = 1") //condicao verdadeira, teremos retornorno
}else{
  console.log("x && z < 5") //condicao falsa, fim de teste das condicionais
}
            
var m = " "
if(m == 0){
console.log("SIM")
}
