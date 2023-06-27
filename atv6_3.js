//Fibonacci
var res = 0;
var x = 0;
var a = 1;
var num = 1; 

for(var i = 0; i < num; i++){
  x = res + a;
  a = res;
  res = x
  console.log("Resultado:", res, a);
}
