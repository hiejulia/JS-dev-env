//did not use babel transpile so use CommonJS and ES5
require('babel-register')();
//disable webpack feature that mocha does not understand
require.extensions['.css'] = function() {};
