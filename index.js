/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author: Andrey Okonetchnikov @okonetchnikov
*/

var utils = require('loader-utils');
var rework = require('rework');
var path = require('path');

module.exports = function(content) {
  this.cacheable && this.cacheable();

  var options = utils.parseQuery(this.query);
  var css = rework(content);
  var rework_options = this.options.rework;

  if(rework_options && rework_options.use) {
    rework_options.use.forEach(function(plugin){
      if(typeof plugin === 'function') {
        css.use(plugin);
      } else {
        throw new Error("Plugin should be a function");
      }
    });
  }

  return css.toString(options);
};
