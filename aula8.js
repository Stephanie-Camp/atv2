//criacao de vetor, nao armazena apenas um tipo de variavel especifico e nem uma quantidade especifica
var vetor1 = [1, "Maria", 12, 15, "Jorge"] // ou var vetor1 = new Array()

var vetorOne = [1] //vetor com um elemento
var vetor2 = [1, 3, "Mi", 14]
console.log("Vetor1: ", vetor1) //mostra o vetor
console.log("Valor da posicao 2: ", vetor1[2]) //mostra o terceiro valor do nosso vetor = '12'

vetor1[0] = 16; //vai substituir o primeiro valor do nosso vetor 1 => 16
console.log("Valor apos substituicao", vetor1);
console.log("Tamanho do meu vetor: ", vetor1.length);
console.log("ultimo valor do vetor", vetor1.length-1) //mostra o ultimo valor do vetor
console.log("penultimo valor do vetor: ", vetor1.length-2)//mostra o penultimo valor e etc (.length - x)
console.log(`Ultivo valor do meu vetor: ${vetor1[vetor1.length-1]}`) //ultimo valor do vetor
vetor2.push("Katia") //adiciona um novo valor no nosso vetor, ao final do vetor
console.log("vetor2 apos o 'push': ", vetor2);
vetor2.pop(); //retira o ultimo elemento do vetor
console.log("vetor apos retirada do ultimo elemento", vetor2);
vetor1.splice(1, 1, "Marcia"); //nessa posicao, o valor sera substituido
console.log("vetor substituido: ", vetor1);
console.log("posicao do valor '12' no vetor: ", vetor1.indexOf(12)) //mostra a posicao do valor no vetor
//console.log(vetor1.indexOf(x, 2)

var v = [1, 1, 3, 1, 1, 7, 1, 1, 8, 1]
var value = 1
while(true){
  var indexkit = v.indexOf(value)
  v.splice(indexkit, 1)
  if(indexkit === -1){
    break;
  }
}
console.log("Vetor v: ", v);
