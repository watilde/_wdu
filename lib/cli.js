var exec = require('child_process').exec;
var path = require('path');
var node_modules = path.resolve(__dirname + '/../node_modules');
var npm = node_modules + '/npm/cli.js';
var args = ' ' + process.argv.join(' ');

exec(npm + args, function (error, stdout, stderr) {
  process.stdout.write(stdout);
});
