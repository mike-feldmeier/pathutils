const pathutils = require('./pathutils');

// Prints out each filename it finds in the current directory 
// and any subdirectories AS IT FINDS THEM...
pathutils.walkFiles('.', (err, file) => console.log(file));

console.log('');

// Prints out each filename it finds in the current directory 
// and any subdirectories AFTER IT FINDS ALL OF THEM...
pathutils.collectFiles('.').forEach(file => console.log(file));
