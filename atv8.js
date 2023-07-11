var v = [1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 4, 3, 0, 1, 4, 5, 6, 7, 8, 6]

var x = v.length-1;
var value = 2;

while(true){
  var num = v.indexOf(value);

  if(num === -1){
    break;
  }
  v.splice(num, 1);
}
console.log(v);
