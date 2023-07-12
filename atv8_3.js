var v = [5, 1, 3, 8, 1, 4, 5, 2, 0, 7, 6];
var x = v.length;
var num = 0;
var vet = [];

for(var i = 0; i < x; i++){
  while(v[i] < v[i+1]) {
    num = v[i];
    v[i] = v[i+1]
    v[i+1] = num
    if (v[i] < v[i]) {
      vet.splice(0, 1, num);
    }
  }
}

console.log(`Vetor organizado por ordem crescente: `, v, "\nVETOR VET", vet, num);
