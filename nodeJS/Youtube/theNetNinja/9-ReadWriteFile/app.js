// var fs = require('fs');

// fs.readFile('readMe.txt', 'utf8', function(err, data){
//   fs.writeFile('writeMe.txt', data);
// });


var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err,data){
  fs.writeFileSync('second.txt', data);
})





