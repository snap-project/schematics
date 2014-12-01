var Schematics = require('../index.js');

// Define validation schema
var jsonSchema = {
  title: 'Dog',
  description: 'Man\'s best friend.',
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    color: {
      type: 'string'
    }
  },
  required: ['name']
};

// Define methods, can be an simple object or an array of mixins

var mixins = {

  bark: function() {
    console.log('Woof!');
  }

};

// Create entity
var Dog = Schematics.create(jsonSchema, mixins);

// Create instance
var rantanplan = new Dog({name: "Rantanplan", color: "brown"});

// Use it !
rantanplan.bark();

console.log(rantanplan.get('color'));

try {
  // Will throw an error
  rantanplan.set('color', { 'invalid': 'value'});
} catch(err) {
  console.error(err);
}
