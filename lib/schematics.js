/* jshint node:true */
var Entity = require('./entity');
var _ = require('lodash');

var Schematics = {};

Schematics.create = function(jsonSchema, mixins) {

  jsonSchema = jsonSchema ||  {type: 'object'};
  mixins = mixins || null;

  var entityConstructor =  function() {
    this._schema = jsonSchema;
    Entity.apply(this, arguments);
    if(typeof this.initialize === 'function') {
      this.initialize();
    }
  };

  entityConstructor.prototype = Object.create(Entity.prototype);
  entityConstructor.prototype.constructor = entityConstructor;

  if(_.isArray(mixins)) {
    _.forEach(mixins, function(m) {
      _.merge(entityConstructor.prototype, m);
    });
  } else if(_.isObject(mixins)) {
    _.merge(entityConstructor.prototype, mixins);
  }

  return entityConstructor;

};

module.exports = Schematics;
