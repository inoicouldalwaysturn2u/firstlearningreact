
class Person {
  constructor( name = 'Anonymous', age = 0 ) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I am ${ this.name }.`;
  }

  getDescription() {
    return `${ this.name } is ${ this.age } year(s) old, fam.`;
  }
}

class Student extends Person {
  constructor( name, age, major ) {
    super( name, age );
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if ( this.hasMajor() ) {
      description += ` Their major is ${ this.major }.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor( name, age, homeLocation ) {
    super( name, age );
    this.homeLocation = homeLocation;
  }

  hasLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let og = super.getGreeting();

    if ( this.hasLocation() ) {
      og += ` I'm visiting from ${ this.homeLocation }`;
    }

    return og;
  }
}

const me = new Traveler( 'Sad Moi', 28, 'Information Technology.' );
console.log( me.getGreeting() );

const other = new Traveler( 'Yo Momma' );
console.log( other.getGreeting() );
