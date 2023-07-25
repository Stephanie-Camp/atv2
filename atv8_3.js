var v = [5, 1, 3, 8, 1, 4, 5, 2, 0, 7, 6];
var x = v.length;

for(var i = 0; i < x; i++){
  for(var num = i+1; num < x; num++){
    if(v[i] > v[num]){
      var y = v[i];
      v[i] = v[num];
      v[num] = y;
      console.log(`\nVetor: \n`, v);
    }
  }
}

console.log(`\nVetor organizado: [${v}]`);
