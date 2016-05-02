const Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
const builder = new Builder('.', 'system.config.js');

console.log('Build start');

builder
  .buildStatic('app/main.js', 'bundles/system.bundle.js', { minify: true, sourceMaps: true })
  .then(function () {
    console.log('Build complete');
  })
  .catch(function (err) {
    console.log('Build error');
    console.log(err);
  });