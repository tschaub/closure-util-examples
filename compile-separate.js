var fs = require('fs');

var compile = require('closure-util').compile;
var Manager = require('closure-util').Manager;
var Server = require('closure-util').Server;

var manager = new Manager({
  closure: true,
  paths: ['lib/src/**/*.js']
});

var errors = [
  'accessControls',
  'ambiguousFunctionDecl',
  'checkRegExp',
  'checkTypes',
  'checkVars',
  'const',
  'constantProperty',
  'deprecated',
  'duplicateMessage',
  'es5Strict',
  'externsValidation',
  'fileoverviewTags',
  'globalThis',
  'internetExplorerChecks',
  'invalidCasts',
  'misplacedTypeAnnotation',
  'missingProperties',
  'nonStandardJsDocs',
  'suspiciousCode',
  'strictModuleDepCheck',
  'typeInvalidation',
  'undefinedNames',
  'undefinedVars',
  'unknownDefines',
  'uselessCode',
  'visibility'
];

var options = {
  compilation_level: 'ADVANCED_OPTIMIZATIONS',
  jscomp_error: errors,
  generate_exports: true,
  externs: [
    'lib/externs/math/addition.externs.js',
    'lib/externs/math/subtraction.externs.js',
    'lib/externs/browser.js'
  ]
};

function handleResult(err, result) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    fs.writeFile('examples/lib-full.js', result, function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        process.exit(0);
      }
    });
  }
}

manager.on('ready', function() {
  var deps = manager.getDependencies().map(function(script) {
    return script.name;
  });
  compile(deps, options, handleResult);
});
