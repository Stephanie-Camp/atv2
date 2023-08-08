function soma(){ //criacao de uma funcao 'function -nome -(parameters){ -code}'
  let x = 1; let y = 2; let soma = x+y;
  console.log(soma);
} soma(); //chamando funcao -name()

function sub(num){
  let z = 9; let sub = z - num;
  console.log(sub);
} sub(5);

function sub2(num1, num2){ //forma de usar funcao com parametros
  let x = num1; let y = num2; let sub = num2 - num1;
  console.log(sub);
} sub2(20, 30);

function soma(num1, num2, num3){ //segunda forma de usar funcao com parametros
  let soma = num1 + num2 + num3;
  console.log(soma);
} soma(3, 4, 5); //chamando funcao -name()

function soma(num1, num2, num3){
  let soma = num1 + num2 + num3;
  console.log(soma)
} soma(3, 4); //o parametro num3 nao foi definido logo, a funcao retornara undefined

function soma2(num1, num2, num3){ //terceira forma de usar funcao com parametros
  let soma = num1 + num2 + num3;
  return soma;
}
var res = soma2(7, 8, 9); //armazenando a funcao em uma variavel
console.log(res);

//funcao anonima
let div = function(x, y) {return x / y;} //funcao sem nome que retorna algo
let divRes = div(10, 2);
console.log(divRes);

//arrow function
//arr.array.forEach(element => { -code }) - diferencial sendo o => e o fato de nao precisar de nomes
let mult = (x, y) => { return x - y; }
console.log(mult(5, 20));
