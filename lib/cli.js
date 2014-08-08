var exec = require('child_process').exec;
var path = require('path');
var node_modules = path.resolve(__dirname + '/../node_modules');
var npm = node_modules + '/npm/cli.js';
var args = ' ' + process.argv.slice(2).join(' ');
var command = npm + args;

exec(command, function (error, stdout, stderr) {
  process.stdout.write(stdout);
});
