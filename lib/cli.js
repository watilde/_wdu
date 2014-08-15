var path = require('path');
var fs = require('fs');
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
var args = ' ' + process.argv.slice(2).join(' ');
var command = npm + args;

exec(command, function (error, stdout, stderr) {
  process.stdout.write(stdout);
});
