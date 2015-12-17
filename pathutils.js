var fs   = require('fs');
var path = require('path');

module.exports = {
  walk: walk
};

function walk(p, func) {
  if(fs.existsSync(p)) {
    var stats = fs.lstatSync(p);

    if(stats.isDirectory()) {
      fs.readdirSync(p).forEach(function(file) {
        walk(path.join(p, file), func);
      });
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
