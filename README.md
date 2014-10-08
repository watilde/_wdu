wdu
===

npm command wrapper supports json5

## Install

Using npm.

```
$ npm install -g wdu
```

Then you can write package.json in json5

```
// This file is written in JSON5 syntax
{
    name: 'this',
    description: 'file',
    author: 'has <filename>',
    version: '0.0.1'
}
```

Parse `package.json5` to `package.json`

```
$ ls
package.json5

$ wdu package.json5
Created a package.json from the package.json5

$ ls
package.json5 package.json
```


## json5?
See: http://json5.org/
