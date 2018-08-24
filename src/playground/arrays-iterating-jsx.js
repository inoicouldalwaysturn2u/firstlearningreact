/* global ReactDOM */

// WHERE TO LOOK
// Look here [1]

console.log('App.js is running');

const app = { 
  title: 'Indecision App',
  subtitle: 'Lulz amiright okay bruh',
  options: [ ]
};

const onFormSubmit = ( e ) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {

    // const result = !( dupeEvery( e, option ) );
    const result = dupeFor( e, option );

    // clearing input
    e.target.elements.option.value = '';

    if ( !result ) {
      app.options.push( option );
      renderDis();
    }
  }
};

function dupeEvery( e, option ) {  
  return app.options.every( ( solo ) => {
    return !( option === solo );
  });
}

function dupeFor( e, option ) {
  for ( let index = 0; index < app.options.length; index++ ) {
    if ( app.options[ index ] === option ) {
      return true;
    }
  }
}

const purgeBaby = () => {
  app.options = 0;
  renderDis();
};

const appRoot = document.getElementById( 'app' );

const renderDis = () => {
  const template = (
    <div>

      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}

      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>

      <ol>
        // Look here 1 - shortest way to do map
        { app.options.map( ( solo, index ) => <li key={ index }>{ solo }</li> ) }

        // Look here 2 - full way to do map
        {
          app.options.map( ( yo, index ) => {
            return <li key={index}>{yo}</li>;
          } )
        }

      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button name="submit">Add Option</button>
        <button onClick={ purgeBaby }>Purge</button>
      </form>

    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderDis();
