const fs   = require('fs');
const path = require('path');

/**
 * Synchronously walks through a file tree at {@code p}, 
 * executing the given {@code func} for each file encountered
 * 
 * @param {string} p a valid string representing a file system path
 * @param {function} func a valid function to accept the error and/or name of each file
 * @returns nothing
 */
const walkFiles = (p, func) => {
  if(fs.existsSync(p)) {
    const stats = fs.lstatSync(p);

    if(stats.isDirectory()) {
      fs.readdirSync(p).forEach(file => walkFiles(path.join(p, file), func));
    }
    else if(stats.isFile()) {
      func(null, p);
    }
    else {
      func(new Error('Unknown object type'), p);
    }
  }
  else {
    func(new Error('Does not exist'), p);
  }
}

/**
 * Synchronously walks through a file tree at {@code p}, 
 * collecting each file name and returning them as an array.  
 * Any paths resulting in an error are excluded from the result.
 * 
 * @param {string} p a valid string representing a file system path
 * @returns a valid array of strings
 */
const collectFiles = p => {
  const result = [];

  walkFiles(p, (err, file) => {
    if(!err) {
      result.push(file);
    }
  });

  return result;
}

// Export API...
module.exports = { collectFiles, walkFiles };
