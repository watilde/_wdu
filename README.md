wdu
===

npm command wrapper supports json5

## Badges
+ [![NPM Version](http://img.shields.io/npm/v/wdu.svg)](https://www.npmjs.org/package/wdu)
+ [![Build Status](https://api.travis-ci.org/watilde/wdu.svg)](https://travis-ci.org/watilde/wdu)
+ [![Dependency Status](https://gemnasium.com/watilde/wdu.svg)](https://gemnasium.com/watilde/wdu)
+ [![MIT LICENSE](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/watilde/wdu/blob/master/LICENSE)

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
