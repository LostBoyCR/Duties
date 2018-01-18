
var YOLO = process.argv.slice(2);
var out = YOLO.reduce(function(num, num2){
  return +num + +num2  });
console.log(out);