var Manager = require('closure-util').Manager;
var Server = require('closure-util').Server;

var manager = new Manager({
  closure: true,
  paths: ['lib/src/**/*.js', 'examples/*.js']
});
manager.on('ready', function() {
  var server = new Server({
    manager: manager,
    root: 'examples',
    loaderPath: '/lib.js'
  });
  server.start(3000);
});
