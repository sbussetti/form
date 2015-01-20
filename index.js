(function () {
  // i dunno what this means for AMD.. shrug
  if (typeof require === 'function') {
    $ = jQuery = require('jquery');
    module.exports = require('./jquery.form.js');
  }
}).call(this);
