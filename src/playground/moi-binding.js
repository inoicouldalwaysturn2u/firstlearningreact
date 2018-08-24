// basic working
const obj = {
  name: 'YoMa',
  getName() {
    return this.name;
  }
};

// basic working
console.log( obj.getName() );

// doesn't work
const getName = obj.getName;

console.log( getName() );

// works!
const getNames = obj.getName.bind( obj );

console.log( getNames() );
