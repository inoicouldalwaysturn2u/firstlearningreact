/* global React */
/* global ReactDOM */

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

const selectOne = () => {  
  const randomNum = Math.floor( Math.random() * app.options.length );
  const option = app.options[ randomNum ];
  alert( option );
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
        {
          app.options.map( ( yo, index ) => {
            return <li key={index}>{yo}</li>;
          } )
        }

      </ol>

      <form>
        {
          app.options.map( ( yo, index ) => {
            return <input type="checkbox" key={ index } name={ yo } />;
          })
        }
      </form>



      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button name="submit">Add Option</button>
        <button onClick={ purgeBaby }>Purge</button>
        <button disabled={ app.options.length === 0 } onClick={ selectOne }>Select One</button>
      </form>

    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderDis();
