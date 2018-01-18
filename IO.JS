

var PILSEN = process.argv[2];

var fs = require('fs');

var file = fs.readFileSync(PILSEN).toString().split('\n');
console.log(file.length -1)



