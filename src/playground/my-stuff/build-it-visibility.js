/* global React */
/* global ReactDOM */

// how i did it

console.log( 'build-it-1.js is running' );

let text = '';

const onFormSubmit = () => {
  if ( text ) {
    text = '';
  } else {
    text = theDetails;    
  }
  renderDis();
};

const theDetails = (
  <p>Showing the details</p>
);

const appRoot = document.getElementById( 'app' );

const renderDis = () => {
  const template = (
    <div>
      <h1>Build It - 1 - Visibility App</h1>

      <button onClick={ onFormSubmit }>{ text ? 'Hide details' : 'Show details' }</button>

      { text }
    </div>
  );

  ReactDOM.render( template, appRoot );
};

renderDis();
