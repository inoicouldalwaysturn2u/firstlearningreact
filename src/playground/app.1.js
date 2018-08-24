// import React from 'react';
import ReactDOM from 'react-dom';

console.log('App.js is running');

const user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};

function getLocation(location) {
  if (location) {
    return <p>Location: { location }</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{ user.name ? user.name : 'Anonymous' }</h1>
    { ( user.age && user.age >= 18 ) && <p>Age: {user.age}</p> }
    { getLocation( user.location ) }    
  </div>
);

const app = { 
  title: 'Indecision App',
  subtitle: 'Lulz amiright okay bruh',
  options: [ 'One', 'Two' ]
};

// JSX - Javascript XML
const template = (
  <div>
    <h1>{ app.title }</h1>
    <p>{ }</p>
    <p>This is some info</p>
  </div>
);

const getFirstName = ( fullName ) => { 
  return fullName.split( ' ' )[ 0 ];
};
const getFirstNameDeux = (fullName) => fullName.split( ' ' )[ 0 ];

const appRoot = document.getElementById( 'app' );

ReactDOM.render( templateTwo, appRoot );