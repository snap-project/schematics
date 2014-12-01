# Schematics

Simplistic entities with [JSON-Schema](http://json-schema.org/) validation.

Parts of [SNAP!](https://github.com/snap-project/snap.git)

## Using

```bash
npm install git+https://github.com/snap-project/schematics.git
```

## Example

```js
var Schematics = require('schematics');

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
  rantanplan.set('color', { 'invalid': 'value' });
} catch(err) {
  console.error(err);
}

```

## Licence

GPL
