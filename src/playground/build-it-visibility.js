/* global ReactDOM */

// how Andrew did it

console.log( 'build-it-1.js is running' );

let visibility = '';

const onFormSubmit = () => {
  visibility = !visibility
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

      <button onClick={ onFormSubmit }>{ visibility ? 'Hide details' : 'Show details' }</button>

      { visibility && theDetails }
    </div>
  );

  ReactDOM.render( template, appRoot );
};

renderDis();
