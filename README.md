# pathutils
Provides a simple set of path utilities for node

At the moment there is a single method.  More will be added later. 

* walkFiles

## walkFiles
Recursively walks through a directory structure, calling a given function on each file

### example
    pathutils.walkFiles('/mydir', function(err, file) {
      console.log(file);
    })
could produce the output:

    /mydir/a.txt
    /mydir/mysubdir1/b.txt
    /mydir/mysubdir1/mysubdir2/c.txt
