var a = "Oi"
var b = " a minhda idade é "
var c = 20;
console.log(a+b+c); //concatenação de string
console.log(a.concat(b, c)); //formatação do texto, substitui o + 

var x = String(99); //int -> String -> conversão forçada de int para String
console.log("tipo da variável: ", typeof(x)) //Declara o tipo da variável e pode ser realizada a conversão forçada

var name = "Bloo"
var idade = 20
var cidade = "Bom Jesus"
//pode utilizar quebra de linha (enter), concatenação (nome.concat(" idade: ", idade))
var r = (`Tenho ${idade} anos
Moro em ${cidade}
Pode me chamar de ${name}`)
console.log(r) //ou console.log(`Tenho ${idade} ...`)

console.log("Tamanho da string cidade: ", cidade.length)
console.log("Tamanho das variáveis idade e cidade: ", (idade+cidade).length) //independe de ser string ou não, usar ()
cidade.concat(idade)

console.log("bom dia!".toUpperCase(), "Meu nome é", name.toUpperCase()) //converte todas as strings da frase em maiúsculo

console.log("OOOOI".toLowerCase())//converte todas as strings em letras minúsculas
var nameUpper = name.toLowerCase() //outra maneira de utilizar ambos 

var msg = "    Capital do  Sudeste         "
console.log(msg.trim()); //organiza a quantidade de espaços que há no início/final de uma frase
console.log("Oi    tudo bem?".trim())

console.log('alface'.replaceAll('a', '8')) //realiza a troca de todas as letras 'a' por '8'
console.log(name.replace("Bloo", "São Paulo"))
console.log(msg.startsWith("C")) //verifica se a string começa com tal letra
console.log(msg.endsWith(" ")) //verifica se a string termina com tal letra

console.log(msg.includes("capital"))//Confere se a(s) string(s) estão dentro da cadeia (precisa ser a palavra exata, contando maiúsculas e minúsculas)


