# pathutils
Provides a simple set of path utilities for node

* collectFiles
* walkFiles

## walkFiles
As of `1.0.0`

Recursively walks through a directory structure, calling a given function on each file

### example
    pathutils.walkFiles('/mydir', (err, file) => console.log(file))
could produce the output:

    /mydir/a.txt
    /mydir/mysubdir1/b.txt
    /mydir/mysubdir1/mysubdir2/c.txt

## collectFiles
As of `1.1.0`

Recursively walks through a directory structure, collecting each file path and returning the result as an array.  This allows the user to apply the array manipulation methods of their choice.  Any files that result in an error are excluded.

### example
    pathutils.collectFiles('/mydir')

could produce the output:

    [ '/mydir/a.txt', '/mydir/mysubdir1/b.txt', '/mydir/mysubdir1/mysubdir2/c.txt' ]

## Change log
`1.0.0`
- Initial release

`1.0.2`
- Renamed walk to walkFiles

`1.1.0`
- Updated to ES5 syntax
- Reorganized code for better readability
- Added examples
- Added collectFiles
