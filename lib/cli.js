var path = require('path');
var fs = require('fs');
var json5 = require('json5');
var exec = require('child_process').exec;
var node_modules = path.resolve(__dirname + '/../node_modules');

// Overwrite read_json
var target = node_modules + '/npm/node_modules/read-package-json/read-json.js';
var read_json = fs.readFileSync(target, 'utf8');
if (read_json.indexOf('json5') === -1) {
  read_json = "var JSON = require('json5');\n" + read_json;
  fs.writeFileSync(target, read_json);
}

var npm = node_modules + '/npm/cli.js';
var args = process.argv;
var pkg5 = '';
var data = '';
if (args.length === 3 && args[2] === 'package.json5') {
  pkg5 = fs.readFileSync('package.json5', {encoding: 'utf8'});
  data = json5.parse(pkg5);
  data = JSON.stringify(data, 2, 2);
  fs.writeFileSync('package.json', data);
  process.stdout.write('Created a package.json from the package.json5\n');
  return;
}

var opt = ' ' + args.slice(2).join(' ');
var command = npm + opt;

exec(command, function (error, stdout, stderr) {
  process.stdout.write(stdout);
});
