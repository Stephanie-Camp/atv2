var v = [5, 1, 3, 8, 1, 4, 5, 2, 0, 7, 6];
var x = v.length;
var num;
var vet = [];
var i = 0;

for(var i = 0; i < x; i++){
  while(v[i] > v[i+1] && i != -1){
    num = v[i];
    v[i] = v[i+1]
    v[i+1] = num
    if(v[i] < v[i+1]){
      vet.splice(v[i], 1); 

    }
    console.log(`\nValor v[i]: ${v[i]}------Valor num: ${num}\nVetor organizado por ordem crescente: `, v, "\n\nVETOR VET", vet);

  }  
}
  


